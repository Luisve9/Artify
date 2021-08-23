import {_api} from './api' 

export const loginEndpoint = (data) => _api.post('/auth/login',data)

export const signupEndpoint = (data) => {
    return _api.post('/auth/signup',data)
}

export const logoutEndpoint = () => _api.post('/auth/logout')

export const loggedInEndpoint = () => _api.get('/auth/loggedin')