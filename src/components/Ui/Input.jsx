// for doesnt existing unnecessary code
const inputClasses =
	'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white';

const Input = (props) => {
	return (
		<div>
			<label
				htmlFor={props.label}
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
				{props.label}
			</label>
			{!props.isSelect ? (
				<input
					type={props.type ? props.type : 'text'}
					name={props.label}
					id={props.label}
					className={inputClasses}
					placeholder='Surname'
					required
					min={props.min ? props.min : ''}
					value={props.state}
					onChange={(e) => props.setState(e.target.value)}
				/>
			) : (
				<select
					value={props.state}
					onChange={(e) => props.setState(e.target.value)}
					name={props.label}
					id={props.label}
					className={inputClasses}
					required
					defaultValue={''}>
					<option value='' disabled>
						Select Room
					</option>
					{props.options.map((option) => (
						<option
							key={option.roomNumber}
							value={option.roomNumber}>
							{option.roomNumber}
						</option>
					))}
				</select>
			)}
		</div>
	);
};

export default Input;
