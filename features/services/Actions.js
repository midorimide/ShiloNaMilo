import * as types from 'ActionTypes'
import * as services from '../../microservices/services'

export function getServices(){
    (dispatch) => {
        dispatch({
            type: types.SERVICES_REQUEST
        })

        let request = services.getAllServices()
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
}