import { SelectHTMLAttributes } from 'react'
import './select.css'
interface SelectProps {
	values: string[]
	label?: string
}

export const Select = ({
	values,
	label,
	...props
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {
	return (
		<div className="select">
			<label htmlFor={props.id}>{label}</label>
			<select {...props}>
				{values.map((value) => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</div>
	)
}
