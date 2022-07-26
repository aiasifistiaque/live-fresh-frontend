import React from 'react';
import styles from './RedContainer.module.css';

const RedContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default RedContainer;
