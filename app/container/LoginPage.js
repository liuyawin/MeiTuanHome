import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { connect } from 'dva';

import pxTodp from './../utils/pxTodp';
import { NavigationActions, createAction } from './../utils';

@connect()
export default class LoginPage extends Component {
    static navigationOptions = {
        title: '登录',
    };

    constructor(){
        super();
        this.state = {
            username: '',
            pwdword: '',
        }
    }

    toRegisterPage() {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'RegisterPage',
            })
        )
    }

    doLogin(){
        alert(this.state.username);
        alert(this.state.pwdword);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.inputBox}>
                        <Text style={styles.label}>用户名：</Text>
                        <TextInput 
                            style={styles.input}
                            editable={true}
                            maxLength={40}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            onChangeText={(text)=>{this.state.username=text}}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.label}>密码：</Text>
                        <TextInput
                            style={styles.input}
                            password={true}
                            editable={true}
                            maxLength={40}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            onChangeText={(pwd)=>{this.state.pwdword=pwd}}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <TouchableOpacity style={styles.buttton} onPress={this.doLogin.bind(this)}>
                            <Text style={styles.btnText}>登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttton} onPress={this.toRegisterPage.bind(this)}>
                            <Text style={styles.btnText}>注册</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    },
    inputBox: {
        marginTop: pxTodp(18),
        flexDirection: 'row',
    },
    label: {
        width: pxTodp(120),
    },
    input: {
        width: pxTodp(360),
        height: pxTodp(48),
        padding: pxTodp(12),
        borderWidth: pxTodp(1),
        borderRadius: pxTodp(8),
    },
    buttton: {
        width: pxTodp(120),
        height: pxTodp(64),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: pxTodp(1),
        borderRadius: pxTodp(6),
        margin: pxTodp(16),
    },
    btnText: {
        fontWeight: 'bold',
    },
});