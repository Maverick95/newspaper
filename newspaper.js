const ac = require('ansi-colors');

const newspaper = function(s) {

  console.log(ac.white(s));
  console.log(ac.grey(s));
  console.log(ac.white(s));
  console.log(ac.grey(s));
  console.log(ac.white(s));
  console.log(ac.grey(s));
  console.log(ac.white(s));
  console.log(ac.grey(s));
  
}

module.exports = newspaper;