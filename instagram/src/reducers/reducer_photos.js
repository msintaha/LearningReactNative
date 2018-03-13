import { GET_PHOTOS } from '../actions';
import _ from 'lodash';

const initialState = [];
let newstate = initialState;
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.payload;

    default:
      return state;
  }
}
