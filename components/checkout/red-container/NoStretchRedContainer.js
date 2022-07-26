import React from 'react';
import styles from './RedContainer.module.css';

const NoStretchRedContainer = ({ children }) => {
	return <div className={styles.noStretch}>{children}</div>;
};

export default NoStretchRedContainer;
