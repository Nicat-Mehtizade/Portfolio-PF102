import React from 'react'
import IconButton from './IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import "./index.css"

const FooterRightSide = () => {
  return (
    <div>
        <div className='footerIconBar'>
        <IconButton icon={<FontAwesomeIcon icon={faInstagram} />}/>
        <IconButton icon={<FontAwesomeIcon icon={faEnvelope} />}/>
        <IconButton icon={<FontAwesomeIcon icon={faFacebookF} />}/>
        <IconButton icon={<FontAwesomeIcon icon={faAmazon} />}/>
        <IconButton icon={<FontAwesomeIcon icon={faHouse} />}/>
        </div>
        <p className='designer'>Designed By: Nijat Mehtizade</p>
    </div>
  )
}

export default FooterRightSide