/**
 * Autor Eugene Demchenko <demchenkoev@gmail.com>
 * Created on 31.03.17.
 * License BSD
 */
'use strict';

//run "npm install mongoose" for use this example


var config = {
  appName: 'testApp',
  mongoDbs: {
    main: {
      uri: 'mongodb://localhost/cats'
    }
  },
  catName: 'Zildjian',
  logLevel: 'debug'
};

var Builder = require('./../index').Builder;
var builder = (new Builder(config))
  .findModuleAndLoad(__dirname + '/lib/**/*.js');


function run(CatModel, config, log) {

  var kitty = new CatModel({ name: config.catName });

  kitty.save(function (err) {
    if (err) {
      log.error(err);
    } else {
      log.info('new cat created');  //echo {"date":"00:10:44 GMT+0400 (+04)","type":"info","msg":"new cat created"}
    }
  });
}


builder.invoke(run, null, {
  //redefine logFormatter
  logFormatter: ['value', function(type, msg) {
    return JSON.stringify({ date: (new Date()).toTimeString(),  type: type, msg: msg });
  }]

});

//use dependency injection for global methods

var log = $injector.get('log');
log.debug('App initialized'); //echo {"date":"00:20:54 GMT+0400 (+04)","type":"debug","msg":"App initialized"}
