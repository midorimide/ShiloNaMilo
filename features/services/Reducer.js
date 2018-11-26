import * as types from './ActionTypes'

const initialState = {
	areServicesLoading: false,
	services: []
}

export const areServicesLoadingSelector = (state) => state.services.areServicesLoading
export const servicesSelector = (state) => state.services.services

export function servicesReducer (state = initialState, action){
	switch (action.type) {
        case types.SERVICES_REQUEST:
            return Object.assign({}, state, {
                areServicesLoading: true
            })
        case types.SERVICES_SUCCESS:
            return Object.assign({}, state, {
                areServicesLoading: false,
                services: action.data
            })
        case types.SERVICES_FAILURE:
            return Object.assign({}, state, {
                areServicesLoading: false
            })
		default:
			return state
	}
}