const CryptoJS = require('crypto-js');
function encryptString(content) {
  const key = CryptoJS.enc.Utf8.parse('1233211234567890');
  const iv = CryptoJS.enc.Utf8.parse('huhahahasakiyiku');
  const srcs = CryptoJS.enc.Utf8.parse(content);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  // return encrypted.ciphertext.toString().toUpperCase();
}
function decryptString(content) {
  let key = CryptoJS.enc.Utf8.parse("1233211234567890");  // 加密秘钥 16 bite
  let iv = CryptoJS.enc.Utf8.parse("huhahahasakiyiku");   //  矢量
  let baseResult=CryptoJS.enc.Base64.parse(content);   // Base64解密
  let ciphertext=CryptoJS.enc.Base64.stringify(baseResult);     // Base64解密
  let decryptResult = CryptoJS.AES.decrypt(ciphertext,key, {    //  AES解密
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  return decryptResult.toString(CryptoJS.enc.Utf8).toString();
}