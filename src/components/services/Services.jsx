import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Android */}

        <article className='service'>
          <div className="service__head">
            <h3>Website Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Website */}

        <article className='service'>
          <div className="service__head">
            <h3>Desktop Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Desktop */}
      </div>
    </section>
  )
}

export default Services