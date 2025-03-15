import { Route, Routes } from 'react-router-dom'
import './App.css'
import Client from './pages/Client'
import Admin from './pages/Admin'
function App() {

  return (
   <Routes>
    {/* Client Layout  */}
    
    <Route path='/' element={<Client/>}/>

    {/* Admin Layout  */}
    <Route path='/admin' element={<Admin/>}/>
   </Routes>
  )
}

export default App
