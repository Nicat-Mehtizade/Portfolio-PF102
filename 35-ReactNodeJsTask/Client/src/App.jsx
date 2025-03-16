import { Route, Routes } from 'react-router-dom'
import './App.css'
import Client from './pages/Client'
import Admin from './pages/Admin'
import AddBlog from './pages/Admin/AddBlog'
function App() {

  return (
   <Routes>
    {/* Client Layout  */}
    
    <Route path='/' element={<Client/>}/>

    {/* Admin Layout  */}
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/admin/new' element={<AddBlog/>}/>
   </Routes>
  )
}

export default App
