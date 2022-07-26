import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
	name: 'toast',
	initialState: {
		text: '',
		date: '',
	},
	reducers: {
		showToast: (state, action) => {
			state.text = action.payload.text;
			state.date = Date.now();

			return state;
		},
	},
});

export const { showToast } = toastSlice.actions;

export default toastSlice.reducer;
