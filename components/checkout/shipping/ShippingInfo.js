import React, { useEffect, useState } from 'react';
import BlackButton from '../../util/black-button/BlackButton';
import Input from '../../util/input/Input';
import TextArea from '../../util/input/TextArea';
import styles from './ShippingInfo.module.css';
import Modal from 'react-bootstrap/Modal';
import Red from '../../util/text/Red';
import Select from '../../util/input/Select';
import { useCreateAddressMutation } from '../../../store/services/apiService';

import { toast } from 'react-toastify';

const ShippingInfo = () => {
	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);
	return (
		<div>
			<BlackButton onClick={open}>Add a new Address</BlackButton>
			<ShippingModal show={show} hide={close} />
		</div>
	);
};

const cityData = [
	{
		_id: 'Dhaka',
		name: 'Dhaka',
		areas: [
			{ _id: 'Dhanmondi', name: 'Dhanmondi' },
			{ _id: 'Uttara', name: 'Uttara' },
			{ _id: 'Mohammadpur', name: 'Mohammadpur' },
		],
	},
	{
		_id: 'Sylhet',
		name: 'Sylhet',
		areas: [
			{ _id: 'Jalalabad', name: 'Jalalabad' },
			{ _id: 'Kotwali', name: 'Kotwali' },
		],
	},
];

function ShippingModal({ show, hide }) {
	const [open, setOpen] = React.useState(false);

	const [recipient, setRecipinet] = useState();
	const [number, setNumber] = useState();
	const [address, setAddress] = useState();
	const [additionalInfo, setAdditionalInfo] = useState();
	const [area, setArea] = useState();
	const [city, setCity] = useState();
	const [postCode, setPostCode] = useState();

	const [areaData, setAreaData] = useState([]);

	useEffect(() => {
		if (city) {
			const index = cityData.findIndex(object => {
				return object._id === city;
			});
			console.log(cityData[index].areas);
			setAreaData(cityData[index].areas);
		}
	}, [city]);

	const [addAddress, result] = useCreateAddressMutation();

	const addNewAddress = e => {
		e.preventDefault();
		const formData = {
			address,
			area,
			city,
			postCode,
			additionalInfo,
			recipientName: recipient,
			recipientNumber: number,
		};
		addAddress(formData);
	};

	useEffect(() => {
		if (result.isSuccess) {
			toast('New Address Added');
			hide();
			setRecipinet('');
			setNumber('');
			setAddress('');
			setAdditionalInfo('');
			setArea('');
			setPostCode('');
			setAreaData([]);
			setCity('');
		}
	}, [result.isSuccess]);

	return (
		<Modal show={show} onHide={hide} centered size='lg'>
			<Modal.Header closeButton>
				<div className={styles.modalHeader} icon>
					<h5>
						Add a new <Red>address</Red>
					</h5>
				</div>
			</Modal.Header>

			<Modal.Body>
				<form onSubmit={addNewAddress}>
					<div className={styles.modalContent}>
						<Input
							label='Recipinet Name'
							placeholder='Enter Recipient Name'
							value={recipient}
							onChange={e => setRecipinet(e)}
							required
						/>
						<Input
							label='Recipinet Phone Number'
							placeholder='Enter Recipient Phone Number'
							value={number}
							onChange={e => setNumber(e)}
							type='Number'
							required
						/>
						<TextArea
							label='Full Address'
							placeholder='Enter Full Address'
							value={address}
							onChange={e => setAddress(e)}
							required
						/>
						<Input
							label='Additional Address Information'
							optional
							value={additionalInfo}
							onChange={e => setAdditionalInfo(e)}
						/>
						<Select
							label='City'
							placeholder='Enter City'
							data={cityData}
							value={city}
							onChange={e => setCity(e)}
							required
						/>
						{city && (
							<Select
								label='Area'
								placeholder='Enter City'
								data={areaData}
								value={area}
								onChange={e => setArea(e)}
								required
							/>
						)}
						<Input
							label='Post Code'
							placeholder='Enter Post Code'
							value={postCode}
							onChange={e => setPostCode(e)}
							optional
						/>
						<BlackButton submit loading={result.isLoading}>
							Add New Address
						</BlackButton>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
}

export default ShippingInfo;
