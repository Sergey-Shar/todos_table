import { InputHTMLAttributes } from 'react'
import './field.css'
export const Field = ({
	label,
	...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<div className="field">
			<label htmlFor={props.id}> {label} </label>
			<input className="input" {...props} />
		</div>
	)
}
