import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='' element={<Navbar></Navbar>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
