/**
 * file: 包含所有action creator
 */
import * as ActionType from "./action-type.js";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: ActionType.TOGGLE_TODO,
    payload: {id}
});

export const setFilter = filter => ({type: ActionType.SET_FILTER, payload: {filter}});
