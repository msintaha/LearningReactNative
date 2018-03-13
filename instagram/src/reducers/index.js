import { combineReducers } from 'redux';
import PhotosReducer from './reducer_photos';

const rootReducer = combineReducers({
  photos: PhotosReducer
});

export default rootReducer;
