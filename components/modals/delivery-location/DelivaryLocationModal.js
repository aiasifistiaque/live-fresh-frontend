import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import BlackButton from '../../util/black-button/BlackButton';
import Select from '../../util/input/Select';
import Red from '../../util/text/Red';

const cityData = [
	{ _id: 'dhaka', name: 'Dhaka' },
	{ _id: 'cumilla', name: 'Cumilla' },
];

const areaData = [
	{ _id: 'Mohammadpur', name: 'Mohammadpur' },
	{ _id: 'Dhanmondi', name: 'Dhanmondi' },
	{ _id: 'Mirpur', name: 'Mirpur' },
	{ _id: 'Gulshan 1', name: 'Gulshan 1' },
	{ _id: 'Gulshan 2', name: 'Gulshan 2' },
];

const DeliveryLocationModal = ({
	show,
	hide,
	city,
	setCity,
	area,
	setArea,
}) => {
	return (
		<Modal
			show={show}
			onHide={hide}
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
					<h5>
						Select your <Red>Delivery Location</Red>
					</h5>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Select data={cityData} value={city} onChange={e => setCity(e)} />
				<Select data={areaData} value={area} onChange={e => setArea(e)} />

				<BlackButton fill small icon='arrow-white' onClick={hide}>
					Submit
				</BlackButton>
			</Modal.Body>
		</Modal>
	);
};

export default DeliveryLocationModal;
