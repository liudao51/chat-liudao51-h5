import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as ActionType from '../../../redux/action-type.js';

class List extends React.Component {
    static propTypes = {
        authToken: PropTypes.object,
        authUser: PropTypes.object,
    }

    render() {
        return (
            <div className="message-list-wrapper">
                <div className="list-title">我是消息列表页</div>
            </div>
        );
    }
}

export default List;
