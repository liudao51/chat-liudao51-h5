import React from 'react';
import {NavLink} from 'react-router-dom';

class Error404 extends React.Component {
    render() {
        return (
            <div className="error-wrapper">
                <div className="error-tips">~哎哟，我迷路了！</div>
                <div className="error-return"><NavLink to="/user/login">返回登录页吧</NavLink></div>
            </div>
        );
    }
}

export default Error404;
