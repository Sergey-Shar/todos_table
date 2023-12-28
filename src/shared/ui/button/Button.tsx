import { ButtonHTMLAttributes, ReactNode } from 'react'
import './baseButton.css'

export const BaseButton = ({
	children,
	...props
}: {
	children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button className="base-button" {...props}>
			{children}
		</button>
	)
}
