import './styles/Header.css'

const Header = () => {
  return (
    < >
      <section className="header__section"  id='about'>
        <div className="section__div section__div--imgavatar" >
          <h3 className="header__subtitle">About me</h3>
          <img className="header__img img--avatar" src="/imagen2.svg" alt="" />
          <img className="header__img img--circle" src="/imagen1.svg" alt="" />
        </div>
        <div className="section__div section__block">
          <div className='header__block'>
            <h1 className="header__title">Hi,I am Sergio</h1>            
            <p className="header__paragraph">Im a web developer, committed, responsible and professional. With the ability to learn quickly, adapt to changes, good communication and friendly to work in a team! I will be happy to talk with you!</p>
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