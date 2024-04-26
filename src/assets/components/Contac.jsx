import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css'

const Contac = ({englishMode}) => {
    const form = useRef();
    const [isDisable, setIsDisable] = useState(true)
  const sendEmail = (e) => {
    e.preventDefault();
// template_9pjc5yk
    emailjs.sendForm('service_9sbsmkp', 'template_forrgdd', form.current, 'oY8kgLLUqQ3TiG8en')
      .then((result) => {
          console.log(result.text);
          setIsDisable(false) 
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSent=()=>{
    setIsDisable(false)
  }
  const handleScape=()=>{
    setIsDisable(true)
  }
    return (
        <> 
        <div className='form__Delgado'>
        <form className="form-contact" ref={form} onSubmit={sendEmail}>
        <div className="form-group form-group1 ">
            <label className={`${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Nombre</label>
            <label className={`${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>Name</label>
            <input type="text" name="user_name"required   />
        </div>
        <div className="form-group form-group2">
            <label className={`${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Correo</label>
            <label className={`${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>Email</label>
            <input type="email" name="user_email" required  />
        </div>
        <div className="form-group form-group3">
        <label className={`${englishMode ? 'subtitle__eng' : 'sub__eng'}`}>Mensaje</label>
            <label className={`${englishMode ? 'sub__esp' : 'subtitle__esp'}`}>Message</label>
            <textarea name="message" required ></textarea>
        </div>
        <div className="form-group form-group4">
            <input className={`${englishMode ? 'subtitle__eng' : 'sub__eng'}`} type="submit" value="Enviar"  />
            <input className={`${englishMode ? 'sub__esp' : 'subtitle__esp'}`} type="submit" value="Send"  />
        </div>
        </form>
        <div className={`form-container ${isDisable && 'form__disablee'}`}>
            <button className='contact__btn' onClick={handleScape}>X</button>
            <h3 className={`contact__h3 ${englishMode ? 'subtitle__eng' : 'sub__eng'}`}> Enviado</h3>
            <h3 className={`contact__h3 ${englishMode ? 'sub__esp' : 'subtitle__esp'}`}> Sent</h3>
        </div>
        </div>
        </>
    )
}
export default Contac