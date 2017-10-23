import { getSign } from './../utils/sign'

var timestamp = (new Date()).getTime();
var appId = 1000;
var key = 'lmb6e0savtgpmvfbazxbozxngtjq5gel';
//获取验证码
export const getCaptcha = async (payload) =>
    await fetch('http://10.2.48.24:8888/getCaptcha/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `appId=${appId}&timestamp=${timestamp}&username=${payload.username}&sign=${getSign({ appId: appId, timestamp: timestamp, username: payload.username }, key)}`,
    })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

//注册
export const doRegister = async (payload) =>
    await fetch('http://10.2.48.24:8888/doRegister/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `appId=${appId}&captcha=${payload.captcha}&password=${payload.password}&timestamp=${timestamp}&username=${payload.username}&sign=${getSign({ appId: appId, captcha: payload.captcha, password: payload.password, timestamp: timestamp, username: payload.username }, key)}`,
    })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })