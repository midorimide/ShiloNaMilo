import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { servicesReducer } from './features/services/Reducer';
import { serviceInfoReducer } from './features/serviceInfo/Reducer';

export const rootReducer = combineReducers({
	services: servicesReducer,
	serviceInfo: serviceInfoReducer
})

export function configureStore(){
	return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}