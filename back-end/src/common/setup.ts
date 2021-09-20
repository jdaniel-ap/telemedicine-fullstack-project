import cluster from 'cluster';
import os from 'os';

cluster.setupMaster({
  exec: __dirname + '/worker.js'
});

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < os.cpus().length; i++) {
     cluster.fork();
  }
  cluster.on('online', function(worker) {
     console.log('Worker ' + worker.process.pid + ' is online');
   });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
   });
}