const xss = require('xss');
const options = {
  stripIgnoreTagBody: ['script'],
}
const test = '<p><script>alert(1)</script>哈哈哈</p>'
const res = xss(test, options);
console.log(res);