import * as types from './ActionTypes'

const initialState = {
    loading: false,
    userLoading: false,
    service: Object,
    user: Object
}

export const isLoadingSelector = (state) => state.serviceInfo.loading
export const isUserLoadingSelector = (state) => state.serviceInfo.userLoading
export const getServiceInfoSelector = (state) => state.serviceInfo.service
export const getUserInfoSelector = (state) => state.serviceInfo.user

export function serviceInfoReducer (state = initialState, action){
	switch (action.type) {
        case types.SERVICE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })
        case types.SERVICE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                service: action.data
            })
        case types.SERVICE_FAILURE:
            return Object.assign({}, state, {
                loading: false
            })
        case types.USER_REQUEST:
            return Object.assign({}, state, {
                userLoading: true
            })
        case types.USER_SUCCESS:
            return Object.assign({}, state, {
                userLoading: false,
                user: action.data
            })
        case types.USER_FAILURE:
            return Object.assign({}, state, {
                userLoading: false
            })
		default:
			return state
	}
}