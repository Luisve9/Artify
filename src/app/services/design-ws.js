import {_api} from './api' 

export const createDesignEndPoint = (data) => _api.post('/design/create',data);
export const getAllDesignEndPoint = () => _api.get('/design/getAll');
export const getDesignByIdEndPoint = () => _api.get('/design/getDesignById');
export const updateDesignEndPoint = (data) => _api.patch('/design/updateDesign', data);
export const deleteDesignEndPoint = (id) => _api.delete(`/design/delete/${id}`)