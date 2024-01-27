import { Reducer } from "./Reducer";
import {thunk} from 'redux-thunk'
import {applyMiddleware,createStore} from 'redux'

export const Store = createStore(Reducer,applyMiddleware(thunk))

