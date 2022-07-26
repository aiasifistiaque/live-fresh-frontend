import React from 'react';
import ExploreButton from '../../util/buttons/explore/ExploreButton';
import Red from '../../util/text/Red';
import styles from './CartPage.module.css';
import { useSelector } from 'react-redux';

const CartPage = ({ children }) => {
	const { cartItems } = useSelector(state => state.cart);
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<div className={styles.heading}>
					<h3>
						My Shopping <Red>Cart</Red>
					</h3>
				</div>

				{cartItems?.length && cartItems.length > 0 ? (
					<div className={styles.button}>
						<ExploreButton href='/checkout'>Proceed to Checkout</ExploreButton>
					</div>
				) : (
					<div className={styles.button}>
						<ExploreButton href='/search'>Continue Shopping</ExploreButton>
					</div>
				)}
			</div>
			{children}
		</div>
	);
};

export default CartPage;
