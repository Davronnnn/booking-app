import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = (props) => {
	const todayEmptyRooms = useSelector((state) => state.room.todayEmptyRooms);
	return (
		<aside className={`${props.className} w-64`} aria-label='Sidebar'>
			<div className='overflow-y-auto py-8 px-3 bg-gray-50 rounded dark:bg-gray-800 h-full'>
				<ul className='space-y-2'>
					<li>
						<Link
							to='/'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<svg
								aria-hidden='true'
								className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
							</svg>
							<span className='flex-1 ml-3 whitespace-nowrap'>
								Add booking
							</span>
						</Link>
					</li>
					<li>
						<Link
							to='/check'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<svg
								aria-hidden='true'
								className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
								<path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
							</svg>
							<span className='flex-1 ml-3 whitespace-nowrap'>
								Check room
							</span>
						</Link>
					</li>

					<li className='flex items-center p-2 text-base font-normal text-gray-300 cursor-default rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 '>
						<svg
							aria-hidden='true'
							className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
								clipRule='evenodd'></path>
						</svg>
						<span className='flex-1 ml-3 whitespace-nowrap'>
							Today's free rooms
						</span>
						<span
							className={`inline-flex justify-center items-center ${
								todayEmptyRooms !== 0 ? 'p-3' : 'p-7'
							} ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200 text-center`}>
							{todayEmptyRooms !== 0
								? todayEmptyRooms
								: ' no rooms'}
						</span>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
