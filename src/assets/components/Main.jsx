import Contac from './Contac'
import './styles/Main.css'

const Main = ({ darkMode, setDarkMode,englishMode }) => {

    return (
        <>
            <section className={`main__section__major main--last-proyects ${darkMode ? 'main__section__white' : ''}`} id='portfolio' >

                <div className='section__div__mayor'>
                    <h3 className={`main__subtitle ${englishMode ? 'subtitle__eng' : 'sub__eng'}`} >Últimos <span className={`${darkMode ? 'header__subtitle__span' : ''}`}>Proyectos</span></h3>
                    <h3 className={`main__subtitle ${englishMode ? 'sub__esp' : 'subtitle__esp'}`} >Last <span className={`${darkMode ? 'header__subtitle__span' : ''}`}>Projects</span></h3>

                    <img className="main__img img--triangle" src="/imagen3.svg" alt="" />
                </div>
                <section className="main__Section main--last-proyects-box" >
                    <section className="main__section__section" >
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>E-commerce</h3>
                            <a className="section__a" href="https://trabajo06-react.vercel.app/#/" target="_blank">
                                <img className="main__section__img" src="/ecomerce.png" alt="f" />

                            </a>
                        </div>


                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Pokedex</h3>
                            <a className="section__a" href="https://trabajo05-react-pq14xzkib-sergio-delgados-projects.vercel.app/#/pokedex" target="_blank">
                                <img className="main__section__img" src="/Pokedex2.png" alt="f" />

                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Create Users</h3>
                            <a className="section__a" href="https://trabajo04-react-lz26xeb68-sergio-delgados-projects.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/CreateUsers.png" alt="f" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Wiki app</h3>
                            <a className="section__a" href="https://trabajo-react2-1-rickand-morty.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/wiki-rickandmorty.png" alt="f" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Weather app</h3>
                            <a className="section__a" href="https://trabajo02-react.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/weatherapp.png" alt="g" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Ecomerce</h3>
                            <a className="section__a" href="https://ecomerce-nu.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/ecomer.png" alt="h" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Fortune</h3>
                            <a className="section__a" href="https://trabajo012-react.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/galletadelafortuna.png" alt="j" />
                            </a>
                        </div>

                    </section>
                </section>
            </section>
            <section className={`main__section__major main__section--square ${darkMode ? 'main__section__white' : ''}`} id='contact'>

                <div className='section__div__mayor'>
                    <h3 className={`main__subtitle__form ${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Contá<span className={`${darkMode ? 'header__subtitle__span' : ''}`}>ctame</span></h3>
                    <h3 className={`main__subtitle__form ${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>Contact <span className={`${darkMode ? 'header__subtitle__span' : ''}`}>me</span></h3>

                    <img className="main__img img--square" src="/imagen4.svg" alt="" />
                </div>
                <section className="main__Section main__Section--form">
                    <section className="section__section--form">
                        <Contac 
                        englishMode={englishMode}
                        />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Main