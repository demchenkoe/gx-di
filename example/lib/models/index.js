/**
 * Autor Eugene Demchenko <demchenkoev@gmail.com>
 * Created on 31.03.17.
 * License BSD
 */
'use strict';


module.exports.mongoose = ['value', require('mongoose') ];

module.exports.mongoMainDB = ['factory', function (config, mongoose) {
  var db = mongoose.connect(config.mongoDbs.main.uri);
  return db;
}];