import React, { useEffect, useState } from 'react';
import CheckoytSummary from '../components/checkout/cart-summary/CheckoutSummary';
import CheckoutContainer from '../components/checkout/checkout-container/CheckoutContainer';
import PaymentInfo from '../components/checkout/payment-info/PaymentInfo';
import ShippingContainer from '../components/checkout/shipping-container/ShippingContainer';
import ShippingInfo from '../components/checkout/shipping/ShippingInfo';
import Page from '../components/nav/page/Page';
import PageSection from '../components/util/page-section/PageSection';
import { useSelector, useDispatch } from 'react-redux';
import { removeAddress } from '../store/slices/addressSlice';

const Checkout = () => {
	const [address, setAddress] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(removeAddress());
	}, []);

	return (
		<Page>
			<PageSection>
				<CheckoutContainer>
					<div>
						<ShippingContainer>
							<ShippingInfo />
						</ShippingContainer>
						<PaymentInfo />
					</div>

					<CheckoytSummary />
				</CheckoutContainer>
			</PageSection>
		</Page>
	);
};

export default Checkout;
