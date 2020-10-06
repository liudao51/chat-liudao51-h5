import React from 'react';
import {Button, InputItem, List} from 'antd-mobile';
import styles from '../../theme/default.less';
import logo from './../../assets/logo/logo192.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles["login-wrapper"]}>
                <img className={"logo"} src={logo}/>
                <span>稻信聊天室</span>
                <List>
                    <InputItem placeholder="手机号/邮箱"/>
                    <InputItem placeholder="密码"/>
                </List>
                <Button type={"primary"}>登录</Button>
            </div>
        );
    }
}

export default Login;
