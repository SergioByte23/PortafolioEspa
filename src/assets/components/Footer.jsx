import React from 'react'
import './styles/Footer.css'

const Footer = ({ darkMode, setDarkMode,englishMode }) => {
    return (
        <>
        
            <div className="footer">
                <ul className="footer-links">
                    <li className='footer__ul__li'>
                        <a className="footer__icon" href="https://github.com/SergioByte23" target="blank">
                            <img className='footer__img github' src="/git.png" alt="github" />
                        </a>
                    </li>
                    <li className='footer__ul__li'>
                        <a className="footer__icon" href="https://www.linkedin.com/in/sergio-giancarlo-delgado-maco-397583165/" target="blank">
                            <img className='footer__img linkedin' src="/in.png" alt="linkedin" />
                        </a>
                    </li>
                    <li className='footer__ul__li'>
                        <a className="footer__icon" href="https://api.whatsapp.com/send/?phone=51920586679&text&type=phone_number&app_absent=0" target="blank">
                            <img className='footer__img ig' src="/wsp.png" alt="whatsapp" />
                        </a>
                    </li>
                </ul>

                
            </div>
            
            <a className={`footer-text ${darkMode ? 'footer_white' : ''} ${englishMode ? 'subtitle__eng' : 'sub__eng'}`} href="/SergioDelgadoMaco_Cv.pdf" download >
                <h3 className="ff-family-poppins-semi-b">Diseñador Web</h3>
                <p className="ff-family-sen"><span className="full ff-family-poppins-semi-b">FULL</span> Stack</p>
                <h2 className='ff-family-poppins-semi-b footer-text-CV ' >CV <span><i className='bx bx-cloud-download' ></i></span></h2>
                
            </a>
            <a className={`footer-text ${darkMode ? 'footer_white' : ''} ${englishMode ? 'sub__esp' : 'subtitle__esp'}`} href="/SergioDelgadoMaco_Cv.pdf" download >
                <h3 className="ff-family-poppins-semi-b">Web Designer</h3>
                <p className="ff-family-sen"><span className="full ff-family-poppins-semi-b">FULL</span> Stack</p>
                <h2 className='ff-family-poppins-semi-b footer-text-CV ' >CV <span><i className='bx bx-cloud-download' ></i></span></h2>
                
            </a>
            
        </>
    )
}

export default Footer