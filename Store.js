import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { servicesReducer } from './features/services/Reducer'

export const rootReducer = combineReducers({
	services: servicesReducer
})

export function configureStore(){
	return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}