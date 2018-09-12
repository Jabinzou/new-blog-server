const CrptoJs = require('crypto-js')
function makeid(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function uuid() {
  return CrptoJs.lib.WordArray.random(8).toString().toUpperCase();
}
console.log(makeid(16))
console.log(uuid())