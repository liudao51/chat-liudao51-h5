import React from 'react';
import {Button, InputItem, List, WingBlank} from 'antd-mobile';
import logo from '@/assets/logo/logo192.png';
import lock from '@/assets/icons/lock.svg';
import user from '@/assets/icons/user.svg';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-wrapper">
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

export default Login;
