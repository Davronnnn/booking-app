const Button = (props) => {
	return (
		<div className='flex justify-end'>
			<button
				type='submit'
				className=' w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
