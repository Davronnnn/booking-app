import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import checkedImg from '../../assets/accept.png';
import Input from '../Ui/Input';
import Button from '../Ui/Button';
const CheckRoom = () => {
	// redux states
	const rooms = useSelector((state) => state.room.rooms);
	const orderedRooms = useSelector((state) => state.room.orderedRooms);

	// states for form
	const [isBooked, setIsBooked] = useState(false);
	const [roomNumber, setRoomNumber] = useState('');
	const [bookingDate, setBookingDate] = useState('');

	const checkHandler = (e) => {
		e.preventDefault();

		orderedRooms.map((room) => {
			if (
				room.bookingDate === bookingDate &&
				room.roomNumber === roomNumber
			) {
				setIsBooked(true);
			} else {
				setIsBooked(false);
			}
		});
	};

	return (
		<React.Fragment>
			<div className='p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
				<form onSubmit={checkHandler} className='space-y-6'>
					<h5 className='text-xl font-medium text-gray-900 dark:text-white '>
						Check booking
					</h5>
					<hr />

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

					<Button>Check</Button>
					{isBooked ? (
						<div className='text-center'>
							<h5 className='text-xl font-medium text-gray-900 dark:text-white flex items-center justify-center '>
								Room is booked
								<img
									className='ml-5'
									src={checkedImg}
									alt='room is available'
									width='40'
									height='40'
								/>
							</h5>
						</div>
					) : (
						<div className='text-center'>
							<h5 className='text-xl font-medium text-gray-900 dark:text-white  '>
								Room is not booked
							</h5>
						</div>
					)}
				</form>
			</div>
		</React.Fragment>
	);
};

export default CheckRoom;
