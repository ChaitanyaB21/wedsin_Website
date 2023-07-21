import React, { useState } from 'react';
import styles from './Faq.module.css'; // Import the module.css file
import Navbar2 from '../Website/Components/Navbar2/navbar2';
import Footer2 from '../Website/Components/Footer2/Footer2';

function FAQ({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.faq}>
            <div className={styles.question} onClick={toggleAnswer}>
                {question}
            </div>
            {isOpen && <div className={`${styles.answer} ${styles.showAnswer}`}>{answer}</div>}
        </div>
    );
}

function Faq() {
    return (
        <>
            <Navbar2 />
            <div className={styles.app}>
                
                <h1>Frequently Asked Questions</h1>
                <FAQ
                    question="Question 1: How does the dating app work?"
                    answer="Our dating app connects individuals based on their interests and preferences. Users can create a profile, browse through other profiles, and initiate conversations with potential matches."
                />
                <FAQ
                    question="Question 2: Is the dating app free to use?"
                    answer="Yes, our dating app is free to download and use. However, there may be optional premium features or subscriptions available for enhanced functionality."
                />
                <FAQ
                    question="Question 3: How do I create a profile?"
                    answer="To create a profile, simply download the app, sign up with your email or social media account, and follow the prompts to set up your profile with information and photos."
                />
                <FAQ
                    question="Question 4: How can I find potential matches?"
                    answer="Our dating app utilizes algorithms to suggest potential matches based on your preferences and location. You can also use search filters to narrow down your options and explore profiles."
                />
                <FAQ
                    question="Question 5: Is my personal information secure?"
                    answer="We prioritize the security and privacy of our users. We employ industry-standard security measures to protect your personal information and ensure a safe dating experience."
                />
                <FAQ
                    question="Question 6: How can I report a user?"
                    answer="If you encounter any suspicious or inappropriate behavior, you can report the user directly through the app. Our support team will investigate the issue and take appropriate actions."
                />
            </div>
            <Footer2/>
        </>
    );
}

export default Faq;
