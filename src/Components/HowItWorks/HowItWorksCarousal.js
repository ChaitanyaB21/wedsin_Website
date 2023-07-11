import React from 'react';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './HowItWorksCarousal.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image1 from '../../Assets/works1.png';
import image2 from '../../Assets/works2.png';
import image3 from '../../Assets/works3.png';

const HowItWorksCarousel = (props) => {
    const carouselItems = [
        {
            id: 1,
            image: image1,
            subheading: 'Step 1',
            h1: 'Sign',
            p: 'Fill information & get curated personality analysis report'
        },
        {
            id: 2,
            image: image2,
            subheading: 'Step 2',
            h1: 'Quiz',
            p: 'See snapshot of astrological and modern compatibility.'
        },
        {
            id: 3,
            image: image3,
            subheading: 'Step 3',
            h1: 'Match',
            p: 'Match, date, and get married to live dream life'
        },
        // Add more items as needed
    ];

    const renderCarouselItem = (item) => (
        <div key={item.id} className={styles.carouselItem}>
            <div className={styles.imageDiv}>
                <div className={styles.smallParagraph}>
                    <MobileScreen imageSource={item.image} />
                    <h3>{item.subheading}</h3>
                    <h1>{item.h1} <span>In</span></h1>
                    <p>{item.p}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.carouselWrapper}>
            <Slider
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
                {carouselItems.map(renderCarouselItem)}
            </Slider>
        </div>
    );
};

export default HowItWorksCarousel;
