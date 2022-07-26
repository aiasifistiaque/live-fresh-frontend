import React from 'react';
import styles from './ProfileDetails.module.css';

const ProfileDetails = ({ title, children }) => {
	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<div>{children}</div>
		</div>
	);
};

export default ProfileDetails;
