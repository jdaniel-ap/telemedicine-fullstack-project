"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cluster = require('cluster'); var _cluster2 = _interopRequireDefault(_cluster);
var _os = require('os'); var _os2 = _interopRequireDefault(_os);

_cluster2.default.setupMaster({
  exec: __dirname + '/worker.js'
});

if (_cluster2.default.isMaster) {
  // Fork workers.
  for (var i = 0; i < _os2.default.cpus().length; i++) {
     _cluster2.default.fork();
  }
  _cluster2.default.on('online', function(worker) {
     console.log('Worker ' + worker.process.pid + ' is online');
   });

  _cluster2.default.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
   });
}