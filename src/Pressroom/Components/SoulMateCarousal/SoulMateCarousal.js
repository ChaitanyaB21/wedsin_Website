import React from 'react';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './SoulMateCarousal.module.css';
import soulMate1 from '../../Assests/soulMate1.png';
import soulMate2 from '../../Assests/soulMate2.png';
import soulMate3 from '../../Assests/soulMate3.png';

const SoulMateCarousel = () => {
  const carouselData = [
    {
      image: soulMate1,
      title: 'Feature stories..',
      subtitle: 'Introducing our new values-based job filter and Top Companies',
      description:
        'On April 12, we announced a partnership with industry leaders Microsoft Entra and CLEAR to help ensure that LinkedIn is a source for trusted, verified information for our members. Members will now be able to verify their identity, work email addresses, and workplaces using these new features.',
    },
    {
      image: soulMate2,
      title: 'Feature stories..',
      subtitle: 'Introducing our new values-based job filter and Top Companies',
      description:
        'On April 12, we announced a partnership with industry leaders Microsoft Entra and CLEAR to help ensure that LinkedIn is a source for trusted, verified information for our members. Members will now be able to verify their identity, work email addresses, and workplaces using these new features.',
    },
    {
      image: soulMate3,
      title: 'Feature stories..',
      subtitle: 'Introducing our new values-based job filter and Top Companies',
      description:
        'On April 12, we announced a partnership with industry leaders Microsoft Entra and CLEAR to help ensure that LinkedIn is a source for trusted, verified information for our members. Members will now be able to verify their identity, work email addresses, and workplaces using these new features.',
    },
    // Add more carousel data objects as needed
  ];

  const renderCarouselItem = (item) => (
    <div key={item.id} className={styles.carouselItem}>
      <div className={styles.imageDiv}>
        <img src={item.image} alt={`Image ${item.id}`} className={styles.image} />
      </div>
      <div className={styles.textDiv}>
        <h1>{item.title}</h1>
        <p>{item.subtitle}</p>
        <br/>
        <p>{item.description}</p>
        <button>Read More</button>
      </div>
    </div>
  );

  return (
    <div className={styles.carouselWrapper}>
      <Slider
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className={styles.carousel}
        containerClass=""
        customLeftArrow={<span />}
        customRightArrow={<span />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {carouselData.map(renderCarouselItem)}
      </Slider>
    </div>
  );
};

export default SoulMateCarousel;
