import React from 'react';
import ProfileCard from '../profile-card/ProfileCard';
import ProfileDetails from '../profile-details/ProfileDetails';
import styles from './ProfileContainer.module.css';

const ProfileContainer = ({ children, title, select }) => {
	return (
		<div className={styles.container}>
			<ProfileCard select={select} />
			<ProfileDetails title={title}>{children}</ProfileDetails>
		</div>
	);
};

export default ProfileContainer;
