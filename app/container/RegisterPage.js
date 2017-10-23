import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { connect } from 'dva';

import { NavigationActions, createAction } from './../utils';
import pxTodp from './../utils/pxTodp';

@connect(({ register }) => ({ ...register }))
export default class RegisterPage extends Component {
    static navigationOptions = {
        title: '注册',
    };

    constructor() {
        super();

        this.state = {
            captcha: '',
            username: '',
            password: '',
            code: null,
            test: true
        }
    }

    getCaptcha() {
        this.props.dispatch(createAction('register/getCaptcha')({ username: this.state.username }));
    }

    doRegister() {
        this.props.dispatch(createAction('register/doRegister')({ username: this.state.username, password: this.state.password, captcha: this.state.captcha }));
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState({
            code: nextProps.code,
            message: nextProps.message,
        });
    }

    render() {
        var _this = this;
        return (
            <View style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            editable={true}
                            maxLength={40}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            placeholder={"邮箱或手机号"}
                            onChangeText={(username) => { this.state.username = username }}
                        />
                        <TouchableOpacity style={styles.buttton} onPress={this.getCaptcha.bind(this)}>
                            <Text style={styles.btnText}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            editable={true}
                            maxLength={40}
                            autoCorrect={false}
                            password={true}
                            autoCapitalize={'none'}
                            placeholder={"请填写6~16位数字或字母密码"}
                            onChangeText={(pwd) => { this.state.password = pwd }}
                        />
                    </View>
                    
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            editable={true}
                            maxLength={40}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            placeholder={"输入验证码"}
                            onChangeText={(captcha) => { this.state.captcha = captcha }}
                        />
                        <TouchableOpacity style={styles.buttton} onPress={this.doRegister.bind(this)}>
                            <Text style={styles.btnText}>提交</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.code === 0 ? <Text>注册成功！</Text> : <Text>{this.state.message}</Text>}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inner: {
        height: pxTodp(640),
        alignItems: 'center',
        //justifyContent: 'center',
    },
    inputBox: {
        marginTop: pxTodp(32),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    label: {
        width: pxTodp(120),
    },
    input: {
        width: pxTodp(320),
        height: pxTodp(48),
        padding: pxTodp(12),
        borderWidth: pxTodp(1),
        borderRadius: pxTodp(8),
    },
    buttton: {
        width: pxTodp(180),
        height: pxTodp(64),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: pxTodp(1),
        borderRadius: pxTodp(6),
        marginLeft: pxTodp(16),
    },
    btnText: {
        fontWeight: 'bold',
    },
});