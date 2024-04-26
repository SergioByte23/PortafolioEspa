import { useState } from 'react'
import './styles/Nav.css'

const Nav = ({ darkMode, setDarkMode, englishMode, setEnglishMode }) => {
  const [isNav, setIsNav] = useState(true)
  const handleDisguise = () => {
    setIsNav(!isNav)
  }

  const handleButton = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  const handleButtonEnglish = (e) => {
    e.preventDefault()
    setEnglishMode(!englishMode)
  }

  return (
    <>
      <div className={` nav__div ${darkMode ? 'nav__div__Dark' : ''}`}>
        <span className='nav__subtitle'>SERGIO DELGADO</span>

        <button className='darkmode__btn' onClick={handleButton}>
          <span className={`${darkMode ? 'sun' : 'i__sun'}`}>
            <i className='bx bxs-moon' ></i>
          </span>
          <span className={`${darkMode ? 'i__moon' : 'moon'}`}>
            <i className='bx bxs-sun' ></i>
          </span>
        </button>

        <button className='englishmode__btn' onClick={handleButtonEnglish}>
          <span className={`${englishMode ? 'esp' : 'i__esp'}`}>
            <img className="img__esp" src="/esp.png" alt=""></img>
          </span>
          <span className={`${englishMode ? 'i__eng' : 'eng'}`}>
            <img className="img__eng" src="/eng.png" alt=""></img>
          </span>
        </button>

        <div className="icon-menu" onClick={handleDisguise} id="icon-menu">
          <img className='nav__logo' src="/icon.png" alt="Logo" />
        </div>




        <span className='nav__letter' >S</span>
      </div>
      <ul className={`nav__ul ${englishMode ? 'sub_nav__eng' : 'nav__eng'}  ${darkMode ? 'nav__div__Dark' : ''} ${isNav && 'form__disable'} `} id="box-menu">
        <li><a className={`nav__ul__a  ${darkMode ? 'letters__Dark' : ''}`} href="#root">INICIO</a></li>
        <li><a className={`nav__ul__a  ${darkMode ? 'letters__Dark' : ''}`} href="#portfolio">PROYECTOS</a></li>
        <li><a className={`nav__ul__a  ${darkMode ? 'letters__Dark' : ''}`} href="#contact">CONTACTO</a></li>
      </ul>
      <ul className={`nav__ul ${englishMode ? 'nav__esp' : 'sub_nav__esp'} ${darkMode ? 'nav__div__Dark' : ''} ${isNav && 'form__disable'} `} id="box-menu">
        <li><a className={`nav__ul__a  ${darkMode ? 'letters__Dark' : ''}`} href="#root">START</a></li>
        <li><a className={`nav__ul__a  ${darkMode ? 'letters__Dark' : ''}`} href="#portfolio">PROJECTS</a></li>
        <li><a className={`nav__ul__a  ${darkMode ? 'letters__Dark' : ''}`} href="#contact">CONTACT</a></li>
      </ul>

      

    </>
  )
}

export default Nav