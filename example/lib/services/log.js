/**
 * Autor Eugene Demchenko <demchenkoev@gmail.com>
 * Created on 31.03.17.
 * License BSD
 */
'use strict';


module.exports.logFormatter = ['value', function defaultFormatter(type, msg) {  return type + ' '+ JSON.stringify(msg); }];

module.exports.log = ['factory', function(config, logFormatter) {
  var levels = ['error', 'info', 'debug'];
  var logLevel = levels.indexOf(config.logLevel);
  if(logLevel == -1) logLevel = 0;
  return {
    levels: levels,
    debug: function(msg) {
      if(logLevel >= 2) { console.log(logFormatter('debug', msg)); }
    },
    info: function(msg) {
      if(logLevel >= 1) { console.log(logFormatter('info', msg)); }
    },
    error: function(msg) {
      if(logLevel >= 0) { console.log(logFormatter('error', msg)); }
    },
  }
}];