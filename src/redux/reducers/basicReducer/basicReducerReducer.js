import { createAction, handleActions } from 'redux-actions'
import { FETCH_BASIC_SUCCESS } from '../../sagas/basic/basicSaga'
// Name Spaced Action Types
const INCREMENT = 'BasicReducer/INCREMENT'
const DECREMENT = 'BasicReducer/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_BASIC_SUCCESS
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}

export const initialState = {
  count: 0,
  string: 'string'
}

export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      count: state.count + action.payload
    }),
    [DECREMENT]: (state, action) => ({
      ...state,
      count: state.count - action.payload
    }),
    [FETCH_BASIC_SUCCESS]: (state, action) => ({
      ...state,
      count: action.payload
    })
  },
  initialState
)
