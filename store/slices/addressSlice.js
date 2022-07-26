import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
	name: 'address',
	initialState: {
		address: {},
		isSet: false,
		_id: '',
	},
	reducers: {
		setAddress: (state, action) => {
			state.address = action.payload;
			state.isSet = true;
			state._id = action.payload._id;
			return state;
		},
		removeAddress: (state, action) => {
			state.address = {};
			state.isSet = false;
			state._id = '';
			return state;
		},
	},
});

export const { setAddress, removeAddress } = addressSlice.actions;

export default addressSlice.reducer;
