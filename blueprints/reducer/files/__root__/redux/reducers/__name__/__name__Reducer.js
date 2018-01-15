import { createAction, handleActions } from 'redux-actions'
import {FETCH_STARS_SUCCESS} from '../../sagas/<%= camelEntityName %>/<%= camelEntityName %>Saga'
// Name Spaced Action Types
const INCREMENT = '<%= pascalEntityName %>/INCREMENT'
const DECREMENT = '<%= pascalEntityName %>/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_STARS_SUCCESS
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}

export const initialState = {
  count: 0
}

export default handleActions({
  [INCREMENT]: (state, action) =>
    ({...state, count: state.count + action.payload}),
  [DECREMENT]: (state, action) =>
    ({...state, count: state.count - action.payload}),
  [FETCH_STARS_SUCCESS]: (state, action) =>
    ({...state, count: action.payload})
}, initialState)
