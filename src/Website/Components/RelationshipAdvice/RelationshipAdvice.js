import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RelationshipAdvice.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../Assets/adviceImg1.png';
import image2 from '../../Assets/adviceImg2.png';
import blogData from '../../../Pressroom/Components/BlogData';

const RelationshipAdvice = () => {
  const carouselItems = [
    {
      id: 1,
      image: image1,
      heading: 'Getting over the fantasy of dating someone',
      text: 'here’s plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you were interested in and barely know? ',
      author: 'by ABCD, Qualification'
    },
    {
      id: 2,
      image: image2,
      heading: 'Getting over the fantasy of dating someone',
      text: 'here’s plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you were interested in and barely know? ',
      author: 'by ABCD, Qualification'
    },
    {
      id: 3,
      image: image1,
      heading: 'Getting over the fantasy of dating someone',
      text: 'here’s plenty of advice out there on how to get over a breakup, but what about those situations in which you have to let go of someone you were interested in and barely know? ',
      author: 'by ABCD, Qualification'
    },
    // Add more items as needed
  ];

  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const renderCarouselItem = (item) => (
    <div
      key={item.id}
      className={styles.carouselItem}
      onClick={() => navigate('/Blogs')}
    >
      <div className={styles.imageDiv}>
        <img src={item.image} alt={`Image ${item.id}`} className={styles.image} />
      </div>
      <p className={styles.subheading}>{item.heading}</p>
      <p className={styles.text}>{item.text}</p>
      <p className={styles.author}>{item.author}</p>
    </div>
  );

  return (
    <React.Fragment>
      <div id="RelationShipAdvice" className={styles.container}>
        <h1 className={styles.heading}>Relationship Advice</h1>
        <h3 className={styles.subtitle}>Your guide to dating, marriage and relationships all in one place. The latest articles, blogs and videos created by relationship experts, journalists and WedsIn’s in-house advice team, exclusively on WedsIn.</h3>
        <div className={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className={styles.carousel}
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {carouselItems.map(renderCarouselItem)}
          </Carousel>
        </div>
      </div>
      <button className={styles.scrollToTopButton} onClick={handleScrollToTop}>
        Back to Top
      </button>
    </React.Fragment>
  );
};

export default RelationshipAdvice;
