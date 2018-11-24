import * as types from './ActionTypes'
import * as services from '../../microservices/services'

export const getServices = () => async (dispatch) => {
    dispatch({
        type: types.SERVICES_REQUEST
    })

    let request = await services.getAllServices()
    if (request.status == 1){
        dispatch({
            type: types.SERVICES_SUCCESS,
            data: request.result
        })
    } else {
        dispatch({
            type: types.SERVICES_FAILURE
        })
    }
}