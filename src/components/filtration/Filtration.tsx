import { ChangeEventHandler } from 'react'
import { Field } from '../../shared/ui/field'
import { FieldGroup } from '../../shared/ui/fieldGroup'
import { Select } from '../../shared/ui/select'

interface FiltrationProps {
	searchValue: string
	onChange: (value: string) => void
	onSelectChange: (value: '' | 'true' | 'false') => void
}

export const Filtration = ({
	searchValue,
	onChange,
	onSelectChange
}: FiltrationProps) => {
	const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value }
	}) => {
		onChange(value)
	}

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = ({
		target: { value }
	}) => {
		if (value === 'All') {
			onSelectChange('')
			return
		} else if (value === 'Completed') {
			onSelectChange('true')
			return
		} else if (value === 'Uncompleted') {
			onSelectChange('false')
			return
		}
	}

	return (
		<FieldGroup>
			<Field
				value={searchValue}
				onChange={handleInputChange}
				id="search"
				placeholder="Search"
				label="Search by title"
			/>
			<Select
				label="Filter by status"
				onChange={handleSelectChange}
				values={['All', 'Completed', 'Uncompleted']}
			/>
		</FieldGroup>
	)
}
