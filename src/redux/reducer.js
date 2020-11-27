/**
 * file: 根据老的状态,返回生成新的状态
 */
import {combineReducers} from "redux";
import visibilityFilter from "./reducers/visibilityFilter";
import todos from "./reducers/todos";

//Redux的combineReducers函数用于管理多个状态
export default combineReducers({todos, visibilityFilter});
