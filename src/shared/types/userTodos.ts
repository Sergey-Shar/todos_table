import { Todo } from './todos'
import { User } from './user'

export interface TodoWithUserDetails extends Todo {
	user: User
}
