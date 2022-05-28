import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>

          <h5 className='client__name'>Nama</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Saepe tenetur eius iure nostrum ea, maxime veritatis eaque ipsum doloremque voluptatem at porro aperiam, perferendis rerum. 
              Facere autem recusandae asperiores adipisci.
            </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>

          <h5 className='client__name'>Nama</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Saepe tenetur eius iure nostrum ea, maxime veritatis eaque ipsum doloremque voluptatem at porro aperiam, perferendis rerum. 
              Facere autem recusandae asperiores adipisci.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>

          <h5 className='client__name'>Nama</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Saepe tenetur eius iure nostrum ea, maxime veritatis eaque ipsum doloremque voluptatem at porro aperiam, perferendis rerum. 
              Facere autem recusandae asperiores adipisci.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>

          <h5 className='client__name'>Nama</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Saepe tenetur eius iure nostrum ea, maxime veritatis eaque ipsum doloremque voluptatem at porro aperiam, perferendis rerum. 
              Facere autem recusandae asperiores adipisci.
            </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials