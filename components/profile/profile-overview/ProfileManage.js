import React, { useEffect, useState } from 'react';
import {
	useGetSelfQuery,
	useUpdateMyInfoMutation,
} from '../../../store/services/apiService';
import BlackButton from '../../util/black-button/BlackButton';
import Input from '../../util/input/Input';
import styles from './ProfileOverview.module.css';
import { toast } from 'react-toastify';

const ProfileManage = () => {
	const { data, isFetching, isError } = useGetSelfQuery();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const [update, result] = useUpdateMyInfoMutation();

	useEffect(() => {
		if (data) {
			setName(data.name);
			setEmail(data.email);
			setPhone(data.phone);
		}
	}, [isFetching]);

	const updateInfo = () => {
		update({ name, email });
	};

	useEffect(() => {
		if (result.isSuccess) {
			toast('Information Updated');
		}
	}, [result.isSuccess]);

	useEffect(() => {
		if (result.isError) toast('Error Updating Information');
	}, [result.isError]);

	return (
		<div className={styles.manage}>
			<Input value={name} label='Name' onChange={e => setName(e)} />
			<Input value={email} label='Email' onChange={e => setEmail(e)} />
			<Input value={phone} label='Phone' onChange={e => setPhone(e)} disabled />
			<BlackButton loading={result.isLoading} onClick={updateInfo}>
				Update Profile
			</BlackButton>
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

export default ProfileManage;
