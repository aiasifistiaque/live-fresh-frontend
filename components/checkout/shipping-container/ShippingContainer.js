import React from 'react';
import { useGetMyAddressQuery } from '../../../store/services/apiService';
import Red from '../../util/text/Red';
import RedContainer from '../red-container/RedContainer';
import styles from './ShippingContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress } from '../../../store/slices/addressSlice';

const ShippingContainer = ({ children }) => {
	const { data, isFetching, isError } = useGetMyAddressQuery();

	return (
		<RedContainer>
			<h3>
				Shipping <Red>Details</Red>
			</h3>
			<div className={styles.children}>{children}</div>
			<div className={styles.title}>
				<h5>
					Or, select <Red>an address</Red>
				</h5>
			</div>
			<div className={styles.items}>
				{data?.doc?.length &&
					data.doc.map((item, i) => <Address data={item} key={i} />)}
			</div>
		</RedContainer>
	);
};

const Address = ({ data, selected }) => {
	const { _id } = useSelector(state => state.address);

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(setAddress(data));
	};

	return (
		<div className={styles.item} onClick={onClick}>
			<div className={_id == data._id ? styles.selected : styles.selector} />
			<div className={styles.inner}>
				<h6>{`${data.recipientName} - ${data.recipientNumber}`}</h6>
				<p>{data.address}</p>
				<p>{`${data.area}, ${data.city}`}</p>
			</div>
		</div>
	);
};

export default ShippingContainer;
