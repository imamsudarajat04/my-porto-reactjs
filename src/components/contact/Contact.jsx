import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>Imamsudrajat707@gmail.com</h5>
            <a href="mailto:imamsudrajat707@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Imam Sudarajat</h5>
            <a href="https://www.facebook.com/imamsudarajat04/" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+62 831 8346 2191</h5>
            <a href="https://api.whatsapp.com/send?phone=6283183462191" target='_blank'>Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder='Insert your name' required />
          <input type="email" name="email" placeholder='Insert your email' required />
          <textarea name="message" rows="7" placeholder='Insert your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact