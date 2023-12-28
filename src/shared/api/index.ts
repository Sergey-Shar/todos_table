import axios from 'axios'
import { BASE_URL } from './constants'
class Api {
	protected url = BASE_URL
	protected api
	constructor() {
		this.api = axios.create({
			baseURL: this.url
		})
	}
}

export default Api
