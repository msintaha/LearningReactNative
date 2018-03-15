import { combineReducers } from 'redux';
import PhotosReducer from './reducer-photos';

const rootReducer = combineReducers({
  photos: PhotosReducer
});

export default rootReducer;
