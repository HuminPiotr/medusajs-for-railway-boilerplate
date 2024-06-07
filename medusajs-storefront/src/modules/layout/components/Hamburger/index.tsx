
import "./styles.scss";

import React from 'react'

interface HamburgerProps {
    
}

const Hamburger: React.FC<HamburgerProps> = () => {
  return (
    <div className='hamburger'>
        <span className='hamburger__line'></span>
        <span className='hamburger__line'></span>
        <span className='hamburger__line'></span>
    </div>
  )
}

export default Hamburger;