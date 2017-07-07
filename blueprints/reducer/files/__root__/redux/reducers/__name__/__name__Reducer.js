import { createAction, handleActions, Action } from 'redux-actions'
import {FETCH_STARS_SUCCESS} from '../../sagas/<%= camelEntityName %>/<%= camelEntityName %>Saga'
// Name Spaced Action Types
const INCREMENT = '<%= pascalEntityName %>/INCREMENT'
const DECREMENT = '<%= pascalEntityName %>/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_STARS_SUCCESS
}

// createAction is a lib for creating FSAs
// see https://github.com/acdlite/flux-standard-action, for info in the flux standard action
type <%= pascalEntityName %>ActionCreators = {
  increment: (number) => Action<number>,
  decrement: (number) => Action<number>
}

export const actionCreators: <%= pascalEntityName %>ActionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}

export type <%= pascalEntityName %>State = {
  count: number
}
export const initialState: <%= pascalEntityName %>State = {
  count: 0
}

export default handleActions({
  [INCREMENT]: (state, action: Action<number>) =>
    ({...state, count: state.count + action.payload}),
  [DECREMENT]: (state, action: Action<number>) =>
    ({...state, count: state.count - action.payload}),
  [FETCH_STARS_SUCCESS]: (state, action: Action<number>) =>
    ({...state, count: action.payload})
}, initialState)
