import * as types from './ActionTypes'
import * as Services from '../../microservices/services';
import * as Users from '../../microservices/profiles'

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
        dispatch(getUserById(request.result.user_id))
    } else {
        dispatch({
            type: types.SERVICE_FAILURE
        })
    }
}

const getUserById = (id) => async (dispatch) => {
    dispatch({
        type: types.OWNER_REQUEST
    })

    let request = await Users.getProfile(id)
    if (request.status === 200){
        dispatch({
            type: types.OWNER_SUCCESS,
            data: request.result
        })
    } else {
        dispatch({
            type: types.OWNER_FAILURE
        })
    }
}