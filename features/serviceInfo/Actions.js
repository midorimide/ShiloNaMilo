import * as types from './ActionTypes'
import * as Services from '../../microservices/services';

export const getServiceById = (id) => async (dispatch) => {
    dispatch({
        type: types.SERVICE_REQUEST
    })

    let request = await Services.getServiceById(id)
    if (request.status === 200){
        dispatch({
            type: types.SERVICE_SUCCESS,
            data: request.result
        })
    } else {
        dispatch({
            type: types.SERVICE_FAILURE
        })
    }
}