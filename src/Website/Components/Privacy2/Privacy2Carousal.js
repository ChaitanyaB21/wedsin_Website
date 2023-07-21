import React from 'react';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Privacy2Carousal.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image1 from '../../Assets/PrivacyCarousalImg1.png';
import image2 from '../../Assets/PrivacyCarousalImg2.png';
import image3 from '../../Assets/PrivacyCarousalImg3.png';

const PrivacyCarousel = () => {
    const carouselItems = 
            [{
                id: 1,
                image: image1,
            },
            {
                id: 2,
                image: image2,
            },
            {
                id: 3,
                image: image3,
            },
            // Add more items as needed
        ];

    const renderCarouselItem = (item) => (
        <div key={item.id} className={styles.carouselItem}>
            <div className={styles.imageDiv}>
                    {/* <img src={item.image} /> */}
                    <MobileScreen imageSource={item.image} />
                   

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
                customLeftArrow={<span/>}
                customRightArrow={<span/>}
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
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {carouselItems.map(renderCarouselItem)}
            </Slider>
        </div>
    );
};

export default PrivacyCarousel;
