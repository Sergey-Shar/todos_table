import { TodoWithUserDetails } from '.'
export interface TodosResponse {
	todos: TodoWithUserDetails[]
	totalTasksCount: number
}
