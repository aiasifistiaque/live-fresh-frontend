import React from 'react';
import CartHeadingRow from '../components/cart/cart-heading-row/CartHeadingRow';
import CartItem from '../components/cart/cart-item/CartItem';
import CartPage from '../components/cart/cart-page/CartPage';
import CartProduct from '../components/cart/cart-product/CartProduct';
import CartQuantity from '../components/cart/cart-quantity/CartQuantity';
import CartRow from '../components/cart/cart-row/CartRow';
import CartSummary from '../components/cart/cart-summary/CartSummary';
import CartTable from '../components/cart/cart-table/CartTable';
import Page from '../components/nav/page/Page';
import PageSection from '../components/util/page-section/PageSection';
import useCart from '../hooks/useCart';
import * as lib from '../lib/constants';

const Cartpage = () => {
	const { items } = useCart();
	return (
		<Page>
			<PageSection>
				<CartPage>
					{/* {JSON.stringify(items)} */}
					<CartTable>
						<CartHeadingRow data={['Item', 'Quantity', 'Subtotal']} />
						{items?.length && items.length > 0 ? (
							items.map((item, i) => (
								<CartRow key={i}>
									<CartItem>
										<CartProduct data={item} />
									</CartItem>
									<CartQuantity item={item}>
										{item?.qty && item.qty}
									</CartQuantity>
									<CartItem>
										<h6>৳{item.price * item.qty}</h6>
									</CartItem>
								</CartRow>
							))
						) : (
							<CartItem>Cart is empty</CartItem>
						)}
					</CartTable>
					<CartSummary />
				</CartPage>
			</PageSection>
		</Page>
	);
};

export default Cartpage;
