import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img'/>
        <p className='p__opensans'>At Gericht, we celebrate culinary excellence with every dish. Our passion for quality ingredients and innovative flavors creates a dining experience like no other. Join us to savor artfully crafted meals in an elegant setting. Discover the perfect blend of taste and sophistication.</p>
        <button className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img'/>
        <p className='p__opensans'>Founded with a vision of culinary artistry, Gericht has been delighting guests since its inception. Our legacy is built on a commitment to excellence, blending tradition with innovation. Over the years, we've grown into a beloved destination for those seeking exceptional dining experiences.</p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
