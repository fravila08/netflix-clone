import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';

function App() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [existingUsers, setExistingUsers] = useState(useLoaderData())
  const navigate = useNavigate()
  const location = useLocation()

  // ADDS USER OBJ ONTO `existingUsers` STATE
  const saveUser = (userObj) => {
    setExistingUsers((prev) => {
      if (prev.length >= 4) return prev;
      return [...prev, userObj];
    });
  };

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
      {selectedUser && <NavBar setSelectedUser={setSelectedUser}/>}
      <Container style={{height:"100%"}}>
        <Outlet 
          context={{
            selectedUser,
            setSelectedUser,
            existingUsers,
            saveUser
          }}
        />
      </Container>
    </>
  )
}

export default App
