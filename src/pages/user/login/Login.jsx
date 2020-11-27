import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, InputItem, List, WingBlank} from 'antd-mobile';
import * as ActionType from '../../../redux/action-type.js';

import logo from '@/assets/logo/logo192.png';
import lock from '@/assets/icons/lock.svg';
import user from '@/assets/icons/user.svg';

class Login extends React.Component {

    static propTypes = {
        authToken: PropTypes.object,
        authUser: PropTypes.object,
    }

    render() {
        return (
            <div className="user-login-wrapper">
                <div className="login-logo">
                    <img className="logo" src={logo}/>
                    <span className="app-name">Dong Dong</span>
                </div>
                <div className="login-info">
                    <WingBlank>
                        <List>
                            <InputItem placeholder="用户名" labelNumber={2}>
                                <div style={{
                                    backgroundImage: 'url(\'' + user + '\')',
                                    backgroundSize: 'cover',
                                    height: '20px',
                                    width: '20px'
                                }}/>
                            </InputItem>
                            <InputItem type="password" placeholder="密码" labelNumber={2}>
                                <div style={{
                                    backgroundImage: 'url(\'' + lock + '\')',
                                    backgroundSize: 'cover',
                                    height: '18px',
                                    width: '18px'
                                }}/>
                            </InputItem>
                        </List>
                    </WingBlank>
                </div>
                <div className="login-btn">
                    <WingBlank>
                        <Button type="primary">登录</Button>
                    </WingBlank>
                </div>
                <div className="login-register">
                    <a>忘记密码</a>
                    <span>|</span>
                    <a>注册用户</a>
                </div>
            </div>
        );
    }
}

/**
 * TODO: 生成容器组件
 */
//把this.state转换为组件属性
const mapStateToProps = (state, ownProps) => ({
    userInfo: state.userInfo,
});
//把组件方法转换为组件属性
const mapDispatchToProps = (dispatch, ownProps) => ({
    loginDispatch: (number) => dispatch({
        type: ActionType.LOGIN,
        payload: {}
    }),
});

//通过redux的connect方法连接用户组件与store(即：使用户组件能够与store进行通讯)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
