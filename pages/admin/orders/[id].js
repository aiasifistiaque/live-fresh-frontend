import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AdminSection from '../../../components/admin/section/AdminSection';
import OrderSummary from '../../../components/checkout/cart-summary/OrderSummary';
import RedButton from '../../../components/util/red-button.js/RedButton';
import Red from '../../../components/util/text/Red';
import {
	useEditOrderStatusMutation,
	useGetOrderByIdQuery,
} from '../../../store/services/apiService';
import { toast } from 'react-toastify';
import AdminPage from '../../../components/nav/page/AdminPage';
import { DetailsContainer } from '../../../components/util/tables/Details';
import Modal from 'react-bootstrap/Modal';
import ModalBody from '../../../components/modals/util/ModalBody';
import BlackButton from '../../../components/util/black-button/BlackButton';
import Select from '../../../components/util/input/Select';

const AdminOrderById = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data, isLoading, isError } = useGetOrderByIdQuery(id);

	const [show, setShow] = useState(false);
	const open = () => setShow(true);
	const close = () => setShow(false);

	if (isLoading || isError) return null;

	return (
		<AdminPage>
			<DetailsContainer>
				<div style={{ padding: 16 }}>
					<h2>
						Order <Red>Details</Red>
					</h2>
					<AdminSection
						title='Item Tracking'
						data={[{ title: 'Delivery Status', value: data.status }]}
					/>
					<AdminSection
						title='Shipping Details'
						data={[
							{
								title: 'Recipient Name',
								value: data.shippingAddress.recipientName,
							},
							{
								title: 'Recipient Number',
								value: data.shippingAddress.recipientNumber,
							},
							{
								title: 'Recipient Name',
								value: data.shippingAddress.recipientName,
							},
							{
								title: 'Address',
								value: `${data.shippingAddress.address}, ${data.shippingAddress.area},${data.shippingAddress.city} `,
							},
						]}
					/>
					<AdminSection
						title='Order Details'
						data={[
							{ title: 'Price', value: `৳${data.itemPrice}` },
							{ title: 'Delivery', value: `৳${data.shippingPrice}` },
							{ title: 'Vat', value: `৳${data.vat}` },
							{ title: 'Discount', value: `৳${data.discount}` },
							{ title: 'Total', value: `৳${data.totalPrice}` },
						]}
					/>
					<RedButton onClick={open} icon='arrow-white'>
						Update Order Status
					</RedButton>
				</div>
				<OrderSummary
					items={data?.orderItems && data.orderItems}
					total={data?.itemPrice && data.itemPrice}
					delivery={data?.shippingAddress && data.shippingPrice}
					vat={data?.vat && data.vat}
					discount={data?.discount && data.discount}
					subTotal={data?.totalPrice && data.totalPrice}
				/>
			</DetailsContainer>
			<UpdateModal
				show={show}
				hide={close}
				status={data?.status && data.status}
				id={data?._id && data._id}
			/>
		</AdminPage>
	);
};

const UpdateModal = ({ show, hide, status, id }) => {
	const statusData = [
		{ _id: 'placed', name: 'Order Placed' },
		{ _id: 'confirmed', name: 'Order Confirmed' },
		{ _id: 'dispatched', name: 'Order Dispatched' },
		{ _id: 'pickedup', name: 'Order Picked Up' },
		{ _id: 'delivered', name: 'Order Delivered' },
		{ _id: 'cancelled', name: 'Order Cancelled' },
	];
	const [value, setValue] = useState();

	const [edit, result] = useEditOrderStatusMutation();

	const formSumbit = e => {
		e.preventDefault();
		hide();
		edit({
			_id: id,
			status: value,
		});
	};

	useEffect(() => {
		if (result.isSuccess) {
			hide();
			toast('Status changed successfully');
		}
	}, [result.isSuccess]);

	useEffect(() => {
		if (result.isError) {
			hide();
			toast('Error, try again');
		}
	}, [result.isError]);

	return (
		<Modal show={show} onHide={hide} centered>
			<Modal.Header closeButton>
				<h5>
					Update Order <Red>Status</Red>
				</h5>
			</Modal.Header>
			<Modal.Body>
				<h6>
					Current status: <Red>{status}</Red>
				</h6>
				<form onSubmit={formSumbit}>
					<Select
						label='Please Choose Order Status'
						required
						value={value}
						onChange={e => setValue(e)}
						data={statusData}
					/>
					{/* {result.isSuccess && (
						<p style={{ color: 'teal' }}>Changed Successfylly</p>
					)} */}

					<div style={{ display: 'flex', gap: 4 }}>
						<RedButton variant='secondary' onClick={hide}>
							cancel
						</RedButton>

						<BlackButton variant='primary' submit loading={result.isLoading}>
							Update
						</BlackButton>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
};

export default AdminOrderById;
