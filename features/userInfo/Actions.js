import * as types from './ActionTypes'
import * as Services from '../../microservices/services';
import * as Users from '../../microservices/profiles'

export const getUserById = (id) => async (dispatch) => {
    dispatch({
        type: types.USER_REQUEST
    })

    let request = await Users.getProfile(id)
    if (request.status === 200){
        dispatch({
            type: types.USER_SUCCESS,
            data: request.result
        })
        dispatch(getUserServices(request.result.id))
    } else {
        dispatch({
            type: types.USER_FAILURE
        })
    }
}

const getUserServices = (userId) => async (dispatch) => {
    dispatch({
        type: types.USER_SERVICES_REQUEST
    })

    let request = await Services.getServicesByUser(userId)
    if (request.status === 200){
        dispatch({
            type: types.USER_SERVICES_SUCCESS,
            data: request.result
        })
    } else {
        dispatch({
            type: types.USER_SERVICES_FAILURE
        })
    }
}