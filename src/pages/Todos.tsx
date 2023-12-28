import { useEffect, useRef, useState } from 'react'
import totosApi from '../shared/api/totos'
import { Pagination } from '../components/pagination'
import { TodosTable } from '../components/todosTable'
import { TodoWithUserDetails } from '../shared/types'
import { Filtration } from '../components/filtration/Filtration'
import { Sort } from '../components/sort'

export const TodosPage = () => {
	const [todos, setTodos] = useState<TodoWithUserDetails[]>([])
	const [page, setPage] = useState<number>(1)
	const [totalTasksCount, setTotalTasksCount] = useState<number>(0)
	const [filterValue, setFilterValue] = useState<'' | 'true' | 'false'>('')
	const [searchValue, setSearchValue] = useState<string>('')
	const [bySort, setBySort] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const pageSize = useRef(15)

	useEffect(() => {
		try {
			totosApi
				.getWithUserDetails(
					page,
					pageSize.current,
					searchValue,
					filterValue,
					bySort,
					sortOrder
				)
				.then((responseData) => {
					setTotalTasksCount(responseData.totalTasksCount)
					setTodos(responseData.todos)
				})
		} catch (error) {
			console.error(error)
		}
	}, [page, filterValue, searchValue, bySort, sortOrder])
	return (
		<>
			{todos ? (
				<>
					<Filtration
						searchValue={searchValue}
						onChange={setSearchValue}
						onSelectChange={setFilterValue}
					/>
					<Sort onChangeBySort={setBySort} onChangeByOrder={setSortOrder} />
					<TodosTable todos={todos} />
					<Pagination
						totalTasksCount={totalTasksCount}
						currentPage={page}
						pageSize={pageSize.current}
						onPageChange={setPage}
					/>
				</>
			) : (
				<span>Loading ...</span>
			)}
		</>
	)
}
