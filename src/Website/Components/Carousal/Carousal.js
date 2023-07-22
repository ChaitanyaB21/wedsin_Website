import React from 'react';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousal.module.css';


const Carousel = (props) => {
    const carouselItems = [
        {
            id: 1,
            image: props.image1,
        },
        {
            id: 2,
            image: props.image2,
        },
        {
            id: 3,
            image: props.image3,
        },
        // Add more items as needed
    ];

    const renderCarouselItem = (item) => (
        <div key={item.id} className={styles.carouselItem}>
            <div className={styles.imageDiv}>
                <img src={item.image} alt={`Image ${item.id}`} className={styles.image} />
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
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {carouselItems.map(renderCarouselItem)}
            </Slider>
        </div>
    );
};

export default Carousel;
