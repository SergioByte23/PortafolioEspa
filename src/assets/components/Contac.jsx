import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css'

const Contac = () => {
    const form = useRef();
    const [isDisable, setIsDisable] = useState(true)
  const sendEmail = (e) => {
    e.preventDefault();
// template_9pjc5yk
    emailjs.sendForm('service_peigs0n', 'template_9pjc5yk', form.current, 'oY8kgLLUqQ3TiG8en')
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
            <label>Name</label>
            <input type="text" name="user_name"required   />
        </div>
        <div className="form-group form-group2">
            <label>Email</label>
            <input type="email" name="user_email" required  />
        </div>
        <div className="form-group form-group3">
            <label>Message</label>
            <textarea name="message" required ></textarea>
        </div>
        <div className="form-group form-group4">
            <input type="submit" value="Send"  />
        </div>
        </form>
        <div className={`form-container ${isDisable && 'form__disablee'}`}>
            <button className='contact__btn' onClick={handleScape}>X</button>
            <h3 className='contact__h3'> Sent</h3>
        </div>
        </div>
        </>
    )
}
export default Contac