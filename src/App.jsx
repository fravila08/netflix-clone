import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';

function App() {
  const userData = useLoaderData()
  const [selectedUser, setSelectedUser] = useState(userData[1])
  const [existingUsers, setExistingUsers] = useState(userData[0])
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogOut = () => {
    localStorage.removeItem("selectedUser")
    setSelectedUser(null)
  }

  // REMOVE USER OBJ FROM `existingUsers` STATE
  const removeUsers = (event, userID) => {
    event.stopPropagation()
    setExistingUsers((prev) => {
      return prev.filter((user)=>(user.id !== userID))
    });
  }

  // ADDS USER OBJ ONTO `existingUsers` STATE
  const saveUser = (userObj) => {
    setExistingUsers((prev) => {
      if (prev.length >= 4) return prev;
      return [...prev, userObj];
    });
  };

  // STORES `selectedUser` WITHIN LOCAL STORAGE
  useEffect(()=>{
    if (selectedUser){
      localStorage.setItem("selectedUser", JSON.stringify(selectedUser))
    }
  }, [selectedUser])

  // WRITES USER DATA ONTO LOCAL STORAGE
  useEffect(() => {
    if (existingUsers) {
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }
  }, [existingUsers]);

  // CONTROLS USER NAVIGATION
  useEffect(() => {
    if (!selectedUser && location.pathname !== "/") {
      navigate("/", { replace: true });
    }

    if (selectedUser && location.pathname === "/") {
      navigate("/films", { replace: true });
    }
  }, [selectedUser, location.pathname, navigate]);

  return (
    <>
      {selectedUser && <NavBar handleLogOut={handleLogOut}/>}
      <Container style={{height:"100%"}}>
        <Outlet 
          context={{
            selectedUser,
            setSelectedUser,
            existingUsers,
            saveUser,
            removeUsers,
          }}
        />
      </Container>
    </>
  )
}

export default App
