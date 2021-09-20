import { Response, Request } from 'express';
import http from 'http';

export default http.createServer((_req : Request, res: Response) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
