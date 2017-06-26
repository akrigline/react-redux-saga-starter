import {combineReducers} from 'redux'
import basicReducer, {BasicReducerState} from './basicReducer/basicReducerReducer'
export default combineReducers({basicReducer})

export type State = BasicReducerState
