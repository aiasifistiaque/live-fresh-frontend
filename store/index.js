import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { adminApi } from './services/adminService';
import { userApi } from './services/apiService';
import addressSlice from './slices/addressSlice';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import locationSlice from './slices/locationSlice';
import toastSlice from './slices/toastSlice';
import toggleSlice from './slices/toggleSlice';

import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

// import toggleSlice from './slices/toggledSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		cart: cartSlice,
		toast: toastSlice,
		address: addressSlice,
		toggle: toggleSlice,
		location: locationSlice,

		// toggle: toggleSlice,
		[userApi.reducerPath]: userApi.reducer,
		// [adminApi.reducerPath]: adminApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userApi.middleware),
	// .concat(adminApi.middleware),
	devTools: true,
});

setupListeners(store.dispatch);
