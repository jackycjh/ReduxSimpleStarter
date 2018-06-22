import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // use concat instead of push method, to create a new array.
      // Alternative:
      // return [ action.payload.data, ...state ];
      return state.concat([action.payload.data]);
  }

  return state;
}