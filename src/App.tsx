import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from 'react-bootstrap'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className="text-center">
        <h1>This is my resume</h1>

      </Container>

    </>
  )
}

export default App
