import React from 'react';
import { FaInstagram, FaGithub, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.css'; // Import the CSS module
import { getImageUrl } from "../../utils";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Baguio City Public Library</h1>
                <p className={styles.introduction}>
                    Welcome to the Baguio City Public Library, your gateway to knowledge, 
                    culture, and community engagement. Explore a world of books, digital 
                    resources, and programs tailored for everyone!
                </p>
                <div className={styles.icons}>
                    <FaFacebook className={styles.icon} />
                    <FaInstagram className={styles.icon} />
                    <FaLinkedin className={styles.icon} />
                    <FaEnvelope className={styles.icon} />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.imageFade}></div>
                <img 
                    src={getImageUrl('hero/1.png')} 
                    alt="Baguio City Public Library" 
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default Hero;
