import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState: {
		toggled: false,
		sidebar: false,
	},
	reducers: {
		shrink: state => {
			state.toggled = true;
		},
		expand: state => {
			state.toggled = false;
		},
		expandSidebar: state => {
			state.sidebar = true;
		},
		shrinkSidebar: state => {
			state.sidebar = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { shrink, expand, expandSidebar, shrinkSidebar } =
	toggleSlice.actions;

export default toggleSlice.reducer;
