import { createSlice } from '@reduxjs/toolkit';

const DUMMY_ROOMS = [
	{
		roomNumber: '1',
		// single room booking dates logic
		// bookingDates: [],
	},
	{
		roomNumber: '2',
		// bookingDates: [],
	},
	{
		roomNumber: '3',
		// bookingDates: [],
	},
];

const roomSlice = createSlice({
	name: 'rooms',
	initialState: {
		rooms: DUMMY_ROOMS,
		loading: false,
		error: null,
		orderedRooms: [],
		todayEmptyRooms: DUMMY_ROOMS.length,
	},
	reducers: {
		fetchRoomsRequest: (state) => {
			state.loading = true;
		},
		fetchRoomsSuccess: (state, action) => {
			state.loading = false;
			state.rooms = action.payload;
		},
		fetchRoomsFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		getOrderedRooms: (state, action) => {
			state.orderedRooms = action.payload;
		},

		orderRoom: (state, action) => {
			const newRoom = action.payload;

			state.orderedRooms.push(newRoom);

			//! single room booking dates logic
			// const room = state.rooms.find(
			// 	(room) => room.roomNumber === newRoom.roomNumber
			// );

			// room.bookingDates = newRoom.bookingDates;
		},
	},
});

export const roomActions = roomSlice.actions;

export default roomSlice;
