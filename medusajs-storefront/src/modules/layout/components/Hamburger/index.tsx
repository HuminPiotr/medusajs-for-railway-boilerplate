
import "./styles.scss";

import React from 'react'

interface HamburgerProps {
    color: string;
}

const Hamburger: React.FC<HamburgerProps> = ({color="default"}) => {
  return (
    <div className={color === "white" ? 'hamburger hamburger--white' : 'hamburger'}>
        <span className='hamburger__line'></span>
        <span className='hamburger__line'></span>
        <span className='hamburger__line'></span>
    </div>
  )
}

export default Hamburger;