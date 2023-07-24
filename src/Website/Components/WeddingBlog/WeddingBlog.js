import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './WeddingBlog.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import blogData from '../../../Pressroom/Components/BlogData';

const WeddingBlogs = () => {
    // const carouselItems = [
    //     {
    //         id: 1,
    //         image: image1,
    //         heading: 'Getting over the fantasy of dating someone.',
    //         text: 'Dating can be an exhilarating journey filled with hope, excitement, and the prospect of finding a meaningful connection with someone',
    //         author: 'by Tara, Relationship expert'
    //     },
    //     {
    //         id: 2,
    //         image: image2,
    //         heading: 'What is in this wedding season?',
    //         text: 'In India, weddings are not just a union of two individuals; they are grand celebrations that unite families, cultures, and traditions. ',
    //         author: 'by Mukesh, Wedding Planner'
    //     },
    //     {
    //         id: 3,
    //         image: image3,
    //         heading: `Don't waste your life.`,
    //         text: 'Love is a fundamental human need, and the desire to find companionship and connection is a natural part of life but it starts within us. ',
    //         author: 'by Jyotika, Architect'
    //     },
    //     // Add more items as needed
    // ];

    const carouselItems = blogData.slice(0,3);

    const navigate = useNavigate();

    // const handleScrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };

    const renderCarouselItem = (item) => (
        <div
            key={item.id}
            className={styles.carouselItem}
            onClick={() => navigate('/Blogs')}
        >
            <div className={styles.imageDiv}>
                <img src={item.image} alt={`Image ${item.id}`} className={styles.image} />
            </div>
            <p className={styles.subheading}>{item.title.split(":")[0]}</p>
            <p className={styles.text}>{item.paragraph.split(" ").slice(0,15).join(" ")}...</p>
            <p className={styles.author}>{item.author}</p>
        </div>
    );

    return (
        <React.Fragment>
            <div id="RelationShipAdvice" className={styles.container}>
                <h1 className={styles.heading}>Wedding Blogs</h1>
                <p className={styles.subtitle}>Your guide to dating, marriage and relationships all in one place. The latest articles, blogs and videos created by relationship experts, journalists and WedsIn’s in-house advice team, exclusively on WedsIn.</p>
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
            {/* <button className={styles.scrollToTopButton} onClick={handleScrollToTop}>
                Back to Top
            </button> */}
        </React.Fragment>
    );
};

export default WeddingBlogs;
