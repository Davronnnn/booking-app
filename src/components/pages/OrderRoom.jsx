import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { roomActions } from '../../store/room-slice';
import Button from '../Ui/Button';
import Input from '../Ui/Input';

const OrderRoom = () => {
	const dispatch = useDispatch();

	const rooms = useSelector((state) => state.room.rooms);
	const orderedRooms = useSelector((state) => state.room.orderedRooms);

	// states for form
	const [error, setError] = useState(false);
	const [surName, setSurname] = useState('');
	const [roomNumber, setRoomNumber] = useState('');
	const [bookingDate, setBookingDate] = useState('');

	console.log(rooms);
	useEffect(() => {
		const sendRoomData = async () => {
			dispatch(roomActions.fetchRoomsRequest());
			const response = await fetch(
				'https://react-http-34226-default-rtdb.firebaseio.com/rooms.json',
				{
					method: 'Put',
					body: JSON.stringify(rooms),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			const responseData = await response.json();

			dispatch(roomActions.fetchRoomsSuccess(responseData));
		};

		sendRoomData().catch((err) => {
			dispatch(roomActions.fetchRoomsFailure(err));
		});
	}, [rooms, dispatch]);

	const handleSubmit = (e) => {
		setError(false);

		e.preventDefault();
		const newRoom = {
			surName,
			roomNumber,
			bookingDate,
		};

		// check if room is already booked
		orderedRooms.map((room) => {
			if (
				room.bookingDate === bookingDate &&
				room.roomNumber === roomNumber
			) {
				alert('Room is already booked, try another date');
				setError(true);
			}
		});

		// check if room is available
		if (!error) {
			dispatch(roomActions.orderRoom(newRoom));
			setSurname('');
			setRoomNumber('');
			setBookingDate('');

			alert('Room booked successfully');
		}
	};

	return (
		<React.Fragment>
			<div className='p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<h5 className='text-xl font-medium text-gray-900 dark:text-white '>
						Order booking
					</h5>
					<hr />
					<Input
						state={surName}
						setState={setSurname}
						label='Your surname'
					/>
					<Input
						state={roomNumber}
						setState={setRoomNumber}
						label='Select room'
						type='number'
						isSelect
						options={rooms}
					/>
					<Input
						type='date'
						state={bookingDate}
						setState={setBookingDate}
						label='Date'
						min={new Date().toISOString().split('T')[0]}
					/>

					<Button>Order</Button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default OrderRoom;
