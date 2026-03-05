import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './MainRouter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <MainRouter/>
      </Router>
    </>
  )
}

export default App;
