import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { HYDRATE } from "next-redux-wrapper"

const rootReducer = combineReducers({
    index: (state = {}, action) => {
      switch (action.type) {
          case HYDRATE:
              console.log("HYDRATE", action);
              return { ...state, ...action.payload };
          default:
              return state;
      }
  },

});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;