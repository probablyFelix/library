import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css'; // Import your CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Baguio City Public Library</h2>
                <p className={styles.paragraph}>
                    Promoting education, lifelong learning, and community engagement. Visit us or connect online to explore our wide array of resources.
                </p>
                <p className={styles.contact}>
                    <FaMapMarkerAlt className={styles.icon} /> 
                    Jose Abad Santos Dr, Baguio City, Philippines
                </p>
                <p className={styles.email}>
                    <FaEnvelope className={styles.icon} /> 
                    bcplibrary@baguiocity.gov.ph
                </p>
                <div className={styles.icons}>
                    <a href="https://www.facebook.com/BCPLibrary" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/bcplibrary/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://twitter.com/bcplibrary" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className={styles.icon} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
