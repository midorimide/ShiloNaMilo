import * as types from './ActionTypes'

const initialState = {
    isUserLoading: false,
    areUserServicesLoading: false,
    userInfo: Object,
    userServicesInfo: []
}

export const isUserLoadingSelector = (state) => state.userInfo.isUserLoading
export const areUserServicesLoadingSelector = (state) => state.userInfo.areUserServicesLoading
export const userInfoSelector = (state) => state.userInfo.userInfo
export const userServicesInfoSelector = (state) => state.userInfo.userServicesInfo

export function userInfoReducer (state = initialState, action){
	switch (action.type) {
        case types.USER_REQUEST:
            return Object.assign({}, state, {
                isUserLoading: true
            })
        case types.USER_SUCCESS:
            return Object.assign({}, state, {
                isUserLoading: false,
                userInfo: action.data
            })
        case types.USER_FAILURE:
            return Object.assign({}, state, {
                isUserLoading: false
            })
        case types.USER_SERVICES_REQUEST:
            return Object.assign({}, state, {
                areUserServicesLoading: true
            })
        case types.USER_SERVICES_SUCCESS:
            return Object.assign({}, state, {
                areUserServicesLoading: false,
                userServicesInfo: action.data
            })
        case types.USER_SERVICES_FAILURE:
            return Object.assign({}, state, {
                areUserServicesLoading: false
            })
		default:
			return state
	}
}