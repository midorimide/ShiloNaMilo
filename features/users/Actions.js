import * as types from './ActionTypes'
import { getAllServices } from '../../microservices/profiles';

export const getServices = () => async (dispatch) => {
    dispatch({
        type: types.SERVICES_REQUEST
    })

    let request = await getAllServices()
    if (request.status === 200){
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