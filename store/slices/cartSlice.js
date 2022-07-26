import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as lib from '../../lib/constants';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems:
			typeof window !== 'undefined' && localStorage.getItem(lib.CART_NAME)
				? JSON.parse(localStorage.getItem(lib.CART_NAME))
				: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const cart = localStorage.getItem(lib.CART_NAME)
				? JSON.parse(localStorage.getItem(lib.CART_NAME))
				: [];
			const item = action.payload;

			if (cart.length == 0) {
				const cartItems = [
					{
						product: item.data._id,
						name: item.data.name,
						price: item.data.price,
						qty: item.qty,
					},
				];
				localStorage.setItem(lib.CART_NAME, JSON.stringify(cartItems));
				state.cartItems = cartItems;
			} else {
				const existItem =
					cart?.length &&
					cart.length > 0 &&
					cart.find(x => x.product == item.data._id);
				if (existItem) {
					const cartItems = cart.map(x =>
						x.product === existItem.product
							? {
									...x,
									qty: x.qty + item.qty,
							  }
							: x
					);
					localStorage.setItem(lib.CART_NAME, JSON.stringify(cartItems));
					state.cartItems = cartItems;
				} else {
					const cartItems = [
						...cart,
						{
							product: item.data._id,
							name: item.data.name,
							price: item.data.price,
							qty: item.qty,
						},
					];
					localStorage.setItem(lib.CART_NAME, JSON.stringify(cartItems));
					state.cartItems = cartItems;
				}
			}
			return state;
		},

		removeFromCart: (state, action) => {
			const cartItems = state.cartItems.filter(
				x => x.product !== action.payload
			);
			localStorage.setItem(lib.CART_NAME, JSON.stringify(cartItems));
			state.cartItems = cartItems;
			return state;
		},
		emptyCart: (state, action) => {
			localStorage.setItem(lib.CART_NAME, []);
			state.cartItems = [];
			return state;
		},
		setCartQuantity: (state, action) => {
			const cart = localStorage.getItem(lib.CART_NAME)
				? JSON.parse(localStorage.getItem(lib.CART_NAME))
				: [];
			const item = action.payload;
			const existItem =
				cart?.length &&
				cart.length > 0 &&
				cart.find(x => x.product == item.data._id);
			if (existItem) {
				const cartItems = cart.map(x =>
					x.product === existItem.product
						? {
								...x,
								qty: item.qty,
						  }
						: x
				);
				localStorage.setItem(lib.CART_NAME, JSON.stringify(cartItems));
				state.cartItems = cartItems;
				return state;
			}
		},
	},
});

export const addToCartAction =
	({ data, qty }) =>
	async dispatch => {
		dispatch({ type: addToCart, payload: { data, qty } });
	};

export const { addToCart, setCartQuantity, removeFromCart, emptyCart } =
	cartSlice.actions;

export default cartSlice.reducer;
