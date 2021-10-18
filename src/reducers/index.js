import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import postReducer from './post.reducer';
import errorReducer from './error.reducer';
import allPostReducer from './allPost.reducer';
import trendinReducer from './trending.reducer';



export default combineReducers({
  userReducer,
  usersReducer, 
  postReducer , 
  errorReducer, 
  allPostReducer,
  trendinReducer
});