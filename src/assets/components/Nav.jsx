import { useState } from 'react'
import './styles/Nav.css'

const Nav = () => {
  const [isNav, setIsNav] = useState(true)
  const handleDisguise=()=>{
    setIsNav(!isNav)
  }
  return (
    <>
    <div className='nav__div' >
    <span className='nav__subtitle'>SERGIO DELGADO</span> 
    <div className="icon-menu" onClick={handleDisguise} id="icon-menu">
        <img className='nav__logo' src="/icon.png" alt="Logo" />
    </div>
    <span className='nav__letter' >S</span>
    </div>
    <ul className={`nav__ul ${isNav && 'form__disable'}`} id="box-menu">
      <li><a className="nav__ul__a" href="#root">ABOUT</a></li>
      <li><a className="nav__ul__a" href="#portfolio">PROJECTS</a></li>
      <li><a className="nav__ul__a" href="#contact">CONTACT</a></li>
    </ul>
    </>
  )
}

export default Nav