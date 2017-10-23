import { getSign } from './../utils/sign'

var timestamp = (new Date()).getTime();
var appId = 1000;
var key = 'lmb6e0savtgpmvfbazxbozxngtjq5gel';
//账号密码登录
export const appPasswdLogin = async (payload) =>
    await fetch('http://10.2.48.24:8888/appPasswdLogin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `appId=${appId}&password=${payload.password}&timestamp=${timestamp}&username=${payload.username}&sign=${getSign({ appId: appId, password: payload.password, timestamp: timestamp, username: payload.username }, key)}`,
    })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })
        
//获取公钥
export const getLoginPasswdEncPubKey = async () =>
await fetch('http://10.2.48.24:8888/getLoginPasswdEncPubKey/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `appId=${appId}&timestamp=${timestamp}&sign=${getSign({ appId: appId, timestamp: timestamp}, key)}`,
})
    .then(response => response.json())
    .catch(error => {
        console.error(error)
    })