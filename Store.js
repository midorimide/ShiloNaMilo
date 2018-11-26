import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { servicesReducer } from './features/services/Reducer';
import { serviceInfoReducer } from './features/serviceInfo/Reducer';
import { userInfoReducer } from './features/userInfo/Reducer';

export const rootReducer = combineReducers({
	services: servicesReducer,
	serviceInfo: serviceInfoReducer,
	userInfo: userInfoReducer
})

export function configureStore(){
	return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}