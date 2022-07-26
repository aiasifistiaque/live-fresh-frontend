import React from 'react';
import styles from './HorizontalButtonContainer.module.css';

const HorizontalButtonContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default HorizontalButtonContainer;
