import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;
