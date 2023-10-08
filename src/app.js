'use strict';

const http = require('http');
const { getFormattedPath } = require('./getFormattedPath');
const { getResponse } = require('./getResponse');

const createServer = () => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const filePath = getFormattedPath(url.pathname);

    (async() => {
      const { code, body } = await getResponse(filePath);

      res.statusCode = code;

      res.end(body);
    })();
  });

  return server;
};

exports.createServer = createServer;
