import React from 'react';
import styles from './Input.module.css';

const Select = ({
	label,
	value,
	onChange,
	required,
	data,
	objectSelect,
	other,
	preSelect,
	noDefault,
}) => {
	return (
		<div className={styles.input}>
			{label && (
				<label>
					{label} {required && <span style={{ color: 'red' }}>*</span>}
				</label>
			)}
			<select
				value={value}
				required={required ? true : false}
				onChange={e => {
					onChange(e.target.value);
				}}
				style={{ textTransform: 'capitalize' }}>
				{!noDefault ? (
					preSelect ? (
						<option disabled value={preSelect._id}>
							{preSelect.name}
						</option>
					) : (
						<option value='' selected={true} disabled>
							select your option
						</option>
					)
				) : null}

				{data.map((option, i) => (
					<option
						key={i}
						value={objectSelect ? JSON.stringify(option) : option._id}>
						{option.name}
					</option>
				))}
				{other && <option value='other'>other</option>}
			</select>
		</div>
	);
};

export default Select;
