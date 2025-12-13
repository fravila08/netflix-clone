import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState({})

  return (
    <>
      {user && <NavBar/>}
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default App
