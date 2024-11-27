import React from 'react';
import './Header.css';

import SubHeading from '../../components/SubHeading/SubHeading'
import {images} from '../../constants'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Welcome to Gericht, where culinary artistry meets exquisite ambiance. Indulge in a symphony of flavors crafted by master chefs, using only the finest ingredients. Experience an unforgettable dining journey in our elegant setting, perfect for any occasion. Join us for a taste of luxury and exceptional service</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header_img' id='welcome_image'/>
      </div>
  </div>
);

export default Header;
