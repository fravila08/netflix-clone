import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';

function App() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [existingUsers, setExistingUsers] = useState([1,2,3,4])
  const navigate = useNavigate()
  const location = useLocation()

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
            setExistingUsers
          }}
        />
      </Container>
    </>
  )
}

export default App
