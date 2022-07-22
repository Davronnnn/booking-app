import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { roomActions } from '../../store/room-slice';
import Button from '../Ui/Button';
import Input from '../Ui/Input';
import Notification from '../Ui/Notification';

const OrderRoom = () => {
	const dispatch = useDispatch();

	const rooms = useSelector((state) => state.room.rooms);
	const orderedRooms = useSelector((state) => state.room.orderedRooms);
	const notification = useSelector((state) => state.room.notification);
	const error = rooms.error;

	// states for form

	const [surName, setSurname] = useState('');
	const [roomNumber, setRoomNumber] = useState('');
	const [bookingDate, setBookingDate] = useState('');

	console.log(rooms);
	useEffect(() => {
		//getting data from server  it isn't do anything (in our project there is no functionality for this) only get request from server.
		const getRooms = async () => {
			const response = await fetch(
				'https://react-http-34226-default-rtdb.firebaseio.com/rooms.json'
			);

			const data = await response.json();
			console.log(data);
		};
		getRooms();
	}, [rooms, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newRoom = {
			surName,
			roomNumber,
			bookingDate,
		};
		const sendRoomData = async () => {
			dispatch(
				roomActions.showNotification({
					status: 'pending',
					message: 'Loading rooms...',
					title: 'Loading',
				})
			);

			// dummy api only put all rooms
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

			// check if room is already booked
			orderedRooms.map((room) => {
				if (
					room.bookingDate === bookingDate &&
					room.roomNumber === roomNumber
				) {
					alert('Room is already booked, try another date');
				}
			});

			if (error) {
				dispatch(
					roomActions.showNotification({
						status: 'error',
						message: 'Sending rooms failed	!',
						title: 'Error',
					})
				);
			}
		};

		// check if room is available
		if (!error) {
			dispatch(roomActions.orderRoom(newRoom));
			setSurname('');
			setRoomNumber('');
			setBookingDate('');

			sendRoomData().catch((err) => {
				dispatch(
					roomActions.showNotification({
						status: 'error',
						message: 'Sending rooms failed	!',
						title: 'Error',
					})
				);
			});
			dispatch(
				roomActions.showNotification({
					status: 'success',
					message: 'Sending rooms successful',
					title: 'Success',
				})
			);
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
			{notification && (
				<Notification
					status={notification.status}
					message={notification.message}
					title={notification.title}
				/>
			)}
		</React.Fragment>
	);
};

export default OrderRoom;
