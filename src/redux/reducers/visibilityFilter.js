/**
 * file: 根据老的状态,返回生成新的状态
 */
import * as actionType from "../action-type.js";

const initialState = "all";

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
