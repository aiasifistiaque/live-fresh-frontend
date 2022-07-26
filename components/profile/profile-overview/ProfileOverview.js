import React from 'react';
import { useGetSelfQuery } from '../../../store/services/apiService';
import NotSet from '../../util/not-set/NotSet';
import styles from './ProfileOverview.module.css';

const ProfileOverview = () => {
	const { data, isFetching, isError } = useGetSelfQuery();
	if (isFetching || isError) return <Skeleton />;
	return (
		<div className={styles.container}>
			<Item title='Name'>{data?.name ? data.name : <NotSet />}</Item>
			<Item title='Email'>{data?.email ? data.email : <NotSet />}</Item>
			<Item title='Details'>
				{data?.description ? data.description : <NotSet />}
			</Item>
			<Item title='Phone'>{data?.phone ? data.phone : <NotSet />}</Item>
			<Item title='Wallet Balance'>{data?.wallet ? data.wallet : 0}</Item>
			<Item title='Referal Code'>
				{data?.refCode ? data.refCode : <NotSet />}
			</Item>
		</div>
	);
};

const Skeleton = () => {
	return (
		<div className={styles.container}>
			<Item title='Name'>...</Item>
			<Item title='Email'>...</Item>
			<Item title='Details'>...</Item>
			<Item title='Phone'>...</Item>
			<Item title='Current Orders'>...</Item>
		</div>
	);
};

const Item = ({ title, children }) => {
	return (
		<div className={styles.item}>
			<h6>{title}</h6>
			<p>{children}</p>
		</div>
	);
};

export default ProfileOverview;
