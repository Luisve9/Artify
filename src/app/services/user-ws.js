import {_api} from './api' 

export const sendEmailEndPoint = (data) => _api.post(`/user/sendMail/${data.email}/${data.contactUser}`);