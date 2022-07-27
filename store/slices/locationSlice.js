import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CUSTOMER_LOCATION, TOKEN_NAME } from '../../lib/constants';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

export const locationSlice = createSlice({
	name: 'location',
	initialState: {
		location:
			typeof window !== 'undefined' &&
			localStorage.getItem(CUSTOMER_LOCATION) != null
				? JSON.parse(localStorage.getItem(CUSTOMER_LOCATION))
				: null,
	},
	reducers: {
		setLocation: (state, action) => {
			const loc = {
				city: action.payload.city,
				area: action.payload.area,
			};
			localStorage.setItem(CUSTOMER_LOCATION, JSON.stringify(loc));
			state.location = loc;
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log('HYDRATE', state, action.payload);
			return {
				...state,
				...action.payload.location,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
