import { ChangeEventHandler } from 'react'
import { FieldGroup } from '../../shared/ui/fieldGroup'
import { Select } from '../../shared/ui/select'

interface SortProps {
	onChangeBySort: (value: string) => void
	onChangeByOrder: (value: 'asc' | 'desc') => void
}

export const Sort = ({ onChangeBySort, onChangeByOrder }: SortProps) => {
	const handleSortByChange: ChangeEventHandler<HTMLSelectElement> = ({
		target: { value }
	}) => {
		if (value === 'default') {
			onChangeBySort('')
			return
		}
		if (value === 'sort by title') {
			onChangeBySort('title')
			return
		} else if (value === 'sort by id') {
			onChangeBySort('id')
			return
		}
	}

	const handleSortOrder: ChangeEventHandler<HTMLSelectElement> = ({
		target: { value }
	}) => {
		onChangeByOrder(value as 'asc' | 'desc')
	}
	return (
		<FieldGroup>
			<Select
				label="Sort by"
				onChange={handleSortByChange}
				values={['default', 'sort by title', 'sort by id']}
			/>
			<Select label="Order" onChange={handleSortOrder} values={['asc', 'desc']} />
		</FieldGroup>
	)
}
