import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default App
