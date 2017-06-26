import { createAction, handleActions, Action } from 'redux-actions'
import {FETCH_BASIC_SUCCESS} from '../../sagas/basic/basicSaga'
// Name Spaced Action Types
const INCREMENT = 'BasicReducer/INCREMENT'
const DECREMENT = 'BasicReducer/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_BASIC_SUCCESS
}

// createAction is a lib for creating FSAs
// see https://github.com/acdlite/flux-standard-action, for info in the flux standard action
type BasicActionCreators = {
  increment: (number) => Action<number>,
  decrement: (number) => Action<number>
}

export const actionCreators: BasicActionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
};

export type BasicReducerState = {
  count: number,
  string: string
}

export const initialState: BasicReducerState = {
  count: 0,
  string: 'string'
}

export default handleActions({
  [INCREMENT]: (state, action: Action<number>) =>
    ({...state, count: state.count + action.payload}),
  [DECREMENT]: (state, action: Action<number>) =>
    ({...state, count: state.count - action.payload}),
  [FETCH_BASIC_SUCCESS]: (state, action: Action<number>) =>
    ({...state, count: action.payload})
}, initialState)
