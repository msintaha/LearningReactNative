import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import IdeaReducer from './ideas-reducer';
import IdeaPadReducer from './idea-pad-reducer';

export default combineReducers({
  auth: AuthReducer,
  ideaPad: IdeaPadReducer,
  ideas: IdeaReducer
});
