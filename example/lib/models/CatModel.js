/**
 * Autor Eugene Demchenko <demchenkoev@gmail.com>
 * Created on 31.03.17.
 * License BSD
 */
'use strict';


module.exports.CatModel  = ['factory', function (mongoMainDB) {
  var Cat = mongoMainDB.model('Cat', { name: String });

  return Cat;
}];