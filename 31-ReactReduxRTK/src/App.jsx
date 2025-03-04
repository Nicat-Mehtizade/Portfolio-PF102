import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './Layouts/Client/ClientLayout'
import Home from "./Layouts/Client/Home"
import About from "./Layouts/Client/About"
import Contact from "./Layouts/Client/Contact"
import Favorites from "./Layouts/Client/Favorites"
import Basket from "./Layouts/Client/Basket"
import Products from "./Layouts/Client/Products"
import AddProduct from "./Layouts/Client/AddProduct"
import Details from './Layouts/Client/Details'

function App() {

  return (
    <>
    <Routes>
      {/* Client Layout */}
      <Route path='/' element={<ClientLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='favorites' element={<Favorites/>} />
          <Route path='basket' element={<Basket/>} />
          <Route path='products' element={<Products/>} />
          <Route path='/products/:id' element={<Details/>} />
          <Route path='new' element={<AddProduct/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
