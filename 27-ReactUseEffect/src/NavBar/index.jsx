import React from 'react'
import Logo from './Logo'
import NavigationBar from './NavigationBar'
import Button from './Button'

const Navbar = () => {
  return (
    
    <div className='navbarShadow'>
        <div className='container'>
        <div className='navBarMain'>
        <Logo/>
        <NavigationBar/>
        <div className='buttonBar'>
            <Button text={"REGISTER"}/>
            <Button text={"LOGIN"}/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar