/**
 * file: 根据老的状态,返回生成新的状态
 */
import * as actionType from "../action-type.js";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.ADD_TODO: {
            const {id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case actionType.TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
