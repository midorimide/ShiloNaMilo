import * as types from './ActionTypes'

const initialState = {
	loading: false,
	data: Object
}

export const isLoadingSelector = (state) => state.serviceInfo.loading
export const getServiceInfoSelector = (state) => state.serviceInfo.data

export function serviceInfoReducer (state = initialState, action){
	switch (action.type) {
        case types.SERVICE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })
        case types.SERVICE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data
            })
        case types.SERVICE_FAILURE:
            return Object.assign({}, state, {
                loading: false
            })
		default:
			return state
	}
}