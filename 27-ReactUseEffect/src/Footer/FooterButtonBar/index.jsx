import React from 'react'
import Button from '../../NavBar/Button'
import "./index.css"

const FooterButtonBar = () => {
  return (
    <div className='footerButtonBar'>
        <Button text={"HOME"}/>
        <Button text={"BOOKS"}/>
        <Button text={"FREE GUIDES"}/>
        <Button text={"BONUS"}/>
        <Button text={"ABOUT"}/>
    </div>
  )
}

export default FooterButtonBar