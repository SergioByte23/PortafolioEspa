import './styles/Header.css'

const Header = ({ darkMode,englishMode }) => {
  return (
    < >
      <section  className={`header__section ${darkMode ? 'header__section__white' : ''}`}  id='about'>
        <div className="section__div section__div--imgavatar" >
          <h3 className={`header__subtitle ${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Acerca <span className={`${darkMode ? 'header__subtitle__span' : ''}`}>de mí </span></h3>
          <h3 className={`header__subtitle ${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>About <span className={`${darkMode ? 'header__subtitle__span' : ''}`}>me </span></h3>

          <img className="header__img img--avatar" src="/imagen2.svg" alt="" />
          <img className="header__img img--circle" src="/imagen1.svg" alt="" />
        </div>
        <div className="section__div section__block">
          <div className='header__block'>
            <h1 className={`header__title ${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Hola, soy Sergio</h1>            
            <h1 className={`header__title ${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>Hi I'm sergioo</h1>  
            <p className={`header__paragraph ${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Soy un desarrollador web, comprometido, responsable y profesional. Con capacidad de aprender rápidamente, adaptarse a los cambios, buena comunicación y amigable para trabajar en equipo! ¡Estaré feliz de hablar contigo!</p>
            <p className={`header__paragraph ${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>I am a web developer, committed, responsible and professional. With the ability to learn quickly, adapt to changes, good communication and friendly to work as a team! I'll be happy to talk to you!</p>

            <ul className="box_icons">
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-html.png" alt="Logo"/>
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-css.png" alt="Logo" />
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-js.png" alt="Logo" />
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-react.png" alt="Logo" />
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-node.png" alt="Logo" />
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-Typescript.png" alt="Logo" />
            </li>
            
          </ul>
          </div>
          
          
        </div>
      </section>
      
      
    </>

  )
}

export default Header