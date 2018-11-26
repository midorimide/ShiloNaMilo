import * as types from './ActionTypes'

const initialState = {
    isServiceLoading: false,
    isServiceOwnerLoading: false,
    serviceInfo: Object,
    serviceOwner: Object
}

export const isServiceLoadingSelector = (state) => state.serviceInfo.isServiceLoading
export const isServiceOwnerLoadingSelector = (state) => state.serviceInfo.isServiceOwnerLoading
export const serviceInfoSelector = (state) => state.serviceInfo.serviceInfo
export const serviceOwnerSelector = (state) => state.serviceInfo.serviceOwner

export function serviceInfoReducer (state = initialState, action){
	switch (action.type) {
        case types.SERVICE_REQUEST:
            return Object.assign({}, state, {
                isServiceLoading: true
            })
        case types.SERVICE_SUCCESS:
            return Object.assign({}, state, {
                isServiceLoading: false,
                serviceInfo: action.data
            })
        case types.SERVICE_FAILURE:
            return Object.assign({}, state, {
                isServiceLoading: false
            })
        case types.OWNER_REQUEST:
            return Object.assign({}, state, {
                isServiceOwnerLoading: true
            })
        case types.OWNER_SUCCESS:
            return Object.assign({}, state, {
                isServiceOwnerLoading: false,
                serviceOwner: action.data
            })
        case types.OWNER_FAILURE:
            return Object.assign({}, state, {
                isServiceOwnerLoading: false
            })
		default:
			return state
	}
}