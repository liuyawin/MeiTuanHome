
import sha256_digest from './sha256';
import base64 from 'base64-js';

//获取签名
export function getSign(signArgsObj, key) {
    var argsArr = [];
    for (var k in signArgsObj) {
        if (signArgsObj.hasOwnProperty(k)) {
            var element = signArgsObj[k];
            var argStr = k + '=' + signArgsObj[k];
            argsArr.push(argStr);
        }
    }
    var srcStr = argsArr.sort().join('&');
    var encKey = key.substring(1, 4) + key.substring(7, 13) + key.substring(15, 17) + key.substring(26, 31);
    var encBin = sha256_digest(encKey + srcStr);
    //console.log('base64js.fromByteArray', base64.fromByteArray(encBin));
    return base64.fromByteArray(encBin);
}