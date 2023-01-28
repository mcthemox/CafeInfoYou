// 리덕스 통합 관리
import { combineReducers } from 'redux';
import cafe from './modules/cafe';
import filter from './modules/filter';

export default combineReducers({
  cafe,
  filter,
});
