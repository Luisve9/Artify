import {_api} from './api' 

export const createDesignEndPoint = (data) => _api.post('/design/create',data)
