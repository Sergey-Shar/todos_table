import Api from '.'
import { TodosResponse } from '../types/todosResponse'
import { TodoWithUserDetails } from '../types/userTodos'

interface QueryParams {
	_expand: string
	_page: number
	_limit: number
	q?: string
	completed?: string
	_sort?: string
	_order?: 'asc' | 'desc'
}

class TodosApi extends Api {
	getWithUserDetails = async (
		page: number,
		pageSize: number,
		searchValue = '',
		filterValue = '',
		sortBy = 'id',
		order: 'asc' | 'desc' = 'asc'
	): Promise<TodosResponse> => {
		const queryParams: QueryParams = {
			_expand: 'user',
			_page: page,
			_limit: pageSize,
			_order: order
		}

		if (searchValue) {
			queryParams.q = searchValue
		}

		if (filterValue) {
			queryParams.completed = filterValue
		}

		if (sortBy) {
			queryParams._sort = sortBy
		}

		const response = await this.api.get<TodoWithUserDetails[]>(`/todos`, {
			params: queryParams
		})
		const totalTasksCount = response.headers['x-total-count']
		return { todos: response.data, totalTasksCount: Number(totalTasksCount) }
	}
}

export default new TodosApi()
