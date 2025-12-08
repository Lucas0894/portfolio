import { Home } from './components/Home'
import { NavBar } from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
    </>
  )
}

export default App
