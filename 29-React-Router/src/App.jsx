import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './Layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Layout/Footer';
import BlogDetails from './pages/BlogDetails';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>


        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:id' element={<BlogDetails />} />
        </Route>
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
