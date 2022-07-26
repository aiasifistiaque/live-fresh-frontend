import React from 'react';
import styles from './PageSection.module.css';

const PageSection = ({ children, title, button, href, bg }) => {
	return <div className={styles.container}>{children}</div>;
};

export default PageSection;
