  import React from 'react';
  import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

  import { images }  from '../../constants'
  import { SubHeading } from '../../components';

  import './Gallery.css';

  const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  const Gallery = () => {
    const scrollRef = React.useRef(null)

    // React.useEffect(() => {
    //   const { current } = scrollRef;
    //   current.scrollLeft = current.scrollWidth / 2; // Start at the first real image
    // }, []);

    const scroll = (direction) =>{
      const {current} = scrollRef;
      console.log(current);
      if(direction === "left"){
        current.scrollLeft -= 300;
      }else{
        current.scrollLeft += 300;
      }

    }
    return (
      <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
          <SubHeading title={"Instagram"}/>
          <h1 className='headtext__cormorant'>Photo Gallery</h1>
          <p className='p__opensans' style={{color: "#AAA" ,marginTop:"2rem"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit fuga iusto quasi consequuntur, iste cumque harum provident totam blanditiis, sit hic minima molestiae? Aspernatur mollitia, laborum tenetur quisquam provident repellendus.</p>
          <button type='button' className='custom__button'>View More</button>
        </div>

        <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollRef}>
            {image.map((image,index)=>(
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
                <img src={image} alt='gallery'/>
                <BsInstagram className='gallery__image-icon'/>
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    );
  }

  export default Gallery;
