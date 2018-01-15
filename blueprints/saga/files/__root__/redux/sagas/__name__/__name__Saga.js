import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction, Action } from 'redux-actions'

// Saga action strings
export const FETCH_STARS = 'saga/<%= pascalEntityName %>/FETCH_STARS'
export const FETCH_STARS_SUCCESS = 'saga/<%= pascalEntityName %>/FETCH_STARS_SUCCESS'
export const FETCH_STARS_FAILURE = 'saga/<%= pascalEntityName %>/FETCH_STARS_FAILURE'

<%= pascalEntityName %>SagaActionCreators = {
  fetchBasic: () => Action<any>,
  fetchBasicSuccess: (number) => Action<any>,
  fetchBasicFailure: (object) => Action<any>
}

export const actionCreators: <%= pascalEntityName %>SagaActionCreators = {
  fetchStars: createAction(FETCH_STARS),
  fetchStarsSuccess: createAction(FETCH_STARS_SUCCESS),
  fetchStarsFailure: createAction(FETCH_STARS_FAILURE)
}

export default function * watch<%= pascalEntityName %> () {
  yield takeLatest(FETCH_STARS, get<%= pascalEntityName %>)
}

export function * get<%= pascalEntityName %> (action) {
  try {
    const repoInfo = yield call(axios.get, 'https://api.github.com/repos/ericwooley/react-native-redux-jest-starter-kit')
    yield put(actions.fetchStarsSuccess(repoInfo.data.stargazers_count))
  } catch (error) {
    yield put(actions.fetchStarsFailure(error))
  }
}

