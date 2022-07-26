import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AdminSection from '../../components/admin/section/AdminSection';
import OrderSummary from '../../components/checkout/cart-summary/OrderSummary';
import CheckoutContainer from '../../components/checkout/checkout-container/CheckoutContainer';
import Page from '../../components/nav/page/Page';
import PageSection from '../../components/util/page-section/PageSection';
import RedButton from '../../components/util/red-button.js/RedButton';
import Red from '../../components/util/text/Red';
import { useGetOrderByIdQuery } from '../../store/services/apiService';
import { toast } from 'react-toastify';

const Orderpage = () => {
	const router = useRouter();
	const { order, result } = router.query;
	const { data, isFetching, isError } = useGetOrderByIdQuery(order);
	const [toasted, setToasted] = useState(false);

	useEffect(() => {
		const tst = () => {
			if (result == 'success' && !toasted) {
				toast('Your Order has been placed successfully');
				setToasted(true);
			}
		};
		setTimeout(tst, 2000);
		return () => clearTimeout(tst);
	}, [result]);

	if (isFetching || isError) return null;

	return (
		<Page>
			<PageSection>
				<CheckoutContainer>
					<div>
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
						<RedButton icon='arrow-white'>Cancel Order</RedButton>
					</div>
					<OrderSummary
						items={data?.orderItems && data.orderItems}
						total={data?.itemPrice && data.itemPrice}
						delivery={data?.shippingAddress && data.shippingPrice}
						vat={data?.vat && data.vat}
						discount={data?.discount && data.discount}
						subTotal={data?.totalPrice && data.totalPrice}
					/>
				</CheckoutContainer>
			</PageSection>
		</Page>
	);
};

export default Orderpage;
