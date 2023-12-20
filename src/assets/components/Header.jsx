import './styles/Header.css'

const Header = () => {
  return (
    < >
      <section className="header__section"  id='about'>
        <div className="section__div section__div--imgavatar" >
          <h3 className="header__subtitle">Acerca de mí</h3>
          <img className="header__img img--avatar" src="/imagen2.svg" alt="" />
          <img className="header__img img--circle" src="/imagen1.svg" alt="" />
        </div>
        <div className="section__div section__block">
          <div className='header__block'>
            <h1 className="header__title">Hola, soy Sergio</h1>            
            <p className="header__paragraph">Soy un desarrollador web, comprometido, responsable y profesional. Con capacidad de aprender rápidamente, adaptarse a los cambios, buena comunicación y amigable para trabajar en equipo! ¡Estaré feliz de hablar contigo!</p>
            <ul className="box_icons">
            <li className='header__ul__li'>
              <img className='header__img__icon' src="/icon-html.png" alt="Logo"/>
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-css.png" alt="Logo" />
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-js.png" alt="Logo" />
            </li>
            <li className='header__ul__li'><img className='header__img__icon' src="/icon-react.png" alt="Logo" />
            </li>
            <li className='header__ul__li'>
              <img className='header__img__icon' src="/icon-node.png" alt="Logo" />
            </li>
            
          </ul>
          </div>
          
          
        </div>
      </section>
      
      
    </>

  )
}

export default Header