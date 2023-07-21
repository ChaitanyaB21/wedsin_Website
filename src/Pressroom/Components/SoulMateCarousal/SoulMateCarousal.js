import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './SoulMateCarousal.module.css';
import blogData from '../BlogData';

const SoulMateCarousel = () => {

    const carouselData = blogData.slice(0, 3);

    const renderCarouselItem = (item) => (
        <div key={item.id} className={styles.carouselItem}>
            <div className={styles.imageDiv}>
                <img src={item.image} alt={`Image ${item.id}`} className={styles.image} />
            </div>
            <div className={styles.textDiv}>
                <h1>{item.title.split(":")[0]}</h1>
                <p>{item.paragraph.split(" ").slice(0,50).join(" ")}</p>
                <br />
                {/* <p>{item.paragraph.split(" ").slice(0,15).join(" ")}</p> */}
                <Link to={`/Blogs/${item.id}`} ><button>Read More</button></Link>
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
