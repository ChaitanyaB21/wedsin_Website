import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LifePartnerBlog.module.css';
import blogData from '../BlogData';

const LifePartnerBlog = () => {

    return (
        <>


            <div className={styles.blogContainer}>
                {blogData.map((blog) => (

                    <div key={blog.id} className={styles.blogItem}>
                        <img src={blog.image} alt={`Blog ${blog.id}`} className={styles.blogImage} />
                        <div className={styles.textDiv} >
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                            <p className={styles.blogParagraph} >{blog.author} &#x2022; {blog.date} </p>
                            <p className={styles.blogParagraph}>{blog.paragraph.split(" ").slice(0,20).join(" ")}...</p>
                        </div>
                        <Link to={`/Blogs/${blog.id}`} ><button className={styles.btn} >Read More</button></Link>
                    </div>
                ))}
            </div>


        </>
    );
};

export default LifePartnerBlog;
