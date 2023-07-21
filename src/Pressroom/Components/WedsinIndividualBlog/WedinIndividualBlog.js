import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WedsinIndividualBlog.module.css';
import blogData from '../BlogData';


const WedsinIndividualBlog = () => {
    const params = useParams();
    const reqBlogId = params.individualBlogId;
    const data = blogData.find((ele) => ele.id == reqBlogId)
    return (
        <div className={styles.blogContainer}>
            <h1 className={styles.heading}>{data.title}</h1>
            <div className={styles.imageDiv} >
                <img alt='Blog Image' src={data.image} ></img>
            </div>
            
            <div className={styles.metadata}>
                <p className={styles.date}> {data.author} &#x2022; {data.date}</p>
            </div>
            <div className={styles.body}>{data.paragraph}</div>
            <div dangerouslySetInnerHTML={{ __html: data.Text }} />
        </div>
    );
};

export default WedsinIndividualBlog;
