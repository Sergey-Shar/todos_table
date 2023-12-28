import { useMemo } from 'react'
import { TodoWithUserDetails, TodoWithUserName } from '../../shared/types'
import { Table, TableBody, TableHead, TableRow } from '../../shared/ui/table'

export const TodosTable = ({ todos }: { todos: TodoWithUserDetails[] }) => {
	const normalizeTodosData: TodoWithUserName[] = useMemo(() => {
		return todos?.map(({ id, title, completed, user }) => {
			return {
				id,
				title,
				completed,
				userName: user.name
			}
		})
	}, [todos])
	return (
		<Table>
			<TableHead>
				<TableRow>
					<th>Id</th>
					<th>User</th>
					<th>Title</th>
					<th>Completed</th>
				</TableRow>
			</TableHead>
			<TableBody>
				{normalizeTodosData ? (
					normalizeTodosData.map((item) => (
						<TableRow key={item.id}>
							<td>{item.id}</td>
							<td>{item.userName}</td>
							<td>{item.title}</td>
							<td>{item.completed ? 'Yes' : 'No'}</td>
						</TableRow>
					))
				) : (
					<span className="loading">Loading...</span>
				)}
			</TableBody>
		</Table>
	)
}
