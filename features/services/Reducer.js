import * as types from 'ActionTypes'

const initialState = {
	loading: false,
	data: []
}

export const isLoadingSelector = (state) => state.services.loading
export const getServicesSelector = (state) => state.services.data

export function servicesReducer (state = initialState, action){
	switch (action.type) {
        case types.SERVICES_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })
        case types.SERVICES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data
            })
        case types.SERVICES_FAILURE:
            return Object.assign({}, state, {
                loading: false
            })		
		default:
			return state
	}
}