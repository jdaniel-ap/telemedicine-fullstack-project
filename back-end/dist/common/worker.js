"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _http = require('http'); var _http2 = _interopRequireDefault(_http);

exports. default = _http2.default.createServer((_req , res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
