/**
 * file: 创建redux状态存储器
 */
import { createStore } from "redux";
import rootReducer from "./reducer.js";

export default createStore(rootReducer);
