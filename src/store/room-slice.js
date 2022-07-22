import { createSlice } from '@reduxjs/toolkit';

// dummy data we can get from the server
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
		notification: null,
	},
	reducers: {
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
		getOrderedRooms: (state, action) => {
			state.orderedRooms = action.payload;
		},

		orderRoom: (state, action) => {
			const newRoom = action.payload;

			state.orderedRooms.push(newRoom);

			if (
				action.payload.bookingDate ===
				new Date().toISOString().slice(0, 10)
			) {
				state.todayEmptyRooms--;
			}
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
