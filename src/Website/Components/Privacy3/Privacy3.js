import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Privacy3.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image1 from '../../Assets/PrivacyCarousalImg1.png';
import image2 from '../../Assets/PrivacyCarousalImg2.png';
import image3 from '../../Assets/PrivacyCarousalImg3.png';
// import blogData from '../../../Pressroom/Components/BlogData';

const Privacy3 = () => {
    const carouselItems = [
        {
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

    // const carouselItems = blogData.slice(0,3);


    const renderCarouselItem = (item) => (
        <div
        >
            <div className={styles.imageDiv}>
                <MobileScreen imageSource={item.image} />
                {/* <img src={item.image} alt={`Image ${item.id}`} className={styles.image} /> */}
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className={styles.text} >
                <h1 className={styles.heading}>Your privacy and safety matters!</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.textDiv} >
                    <h2 className={styles.subtitle}>We prioritize your security and verify potential matches with utmost care as if we were checking for our family.</h2>
                    <Link to='/Contact' ><button className={styles.buttonStart}>Start Now</button></Link>
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel
                        additionalTransfrom={0}
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className={styles.carousel}
                        containerClass=""
                        dotListClass=""
                        customLeftArrow={<span />}
                        customRightArrow={<span />}
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
                    </Carousel>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Privacy3;
