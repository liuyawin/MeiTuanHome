import { getSign } from './../utils/sign'

var timestamp = (new Date()).getTime();
var appId = 1000;
var key = 'lmb6e0savtgpmvfbazxbozxngtjq5gel';
//获取验证码
export const getCaptcha = async (username) =>
    await fetch('http://10.2.48.24:8888/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `appId=${appId}&timestamp=${timestamp}&username=${username.username}&sign=${getSign({ appId: 1000, timestamp: timestamp, username: username.username }, key)}`,
    })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

