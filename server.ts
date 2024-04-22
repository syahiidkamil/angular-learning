import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import cors from 'cors';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');
  // const corsOptions = {
  //   origin: 'http://localhost:4201',
  //   optionsSuccessStatus: 200
  // }
  // server.use(cors(corsOptions)); // enable cors;

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.get('/api/aditira-tamvan', (req, res) => {
    res.send({
      name: 'Aditira Tamvan',
      age: 17,
      wealth: 100000000000000,
    });
  })

  server.get('/api/bosses', (req, res) => {
    res.send([{
      name: "gagas",
      wealth: 271000000000000, // 271 billion hasil dari tambang batu bara
      age: 32,
      imageUrl: "https://media.licdn.com/dms/image/C4E03AQGfHxbi7fMdXQ/profile-displayphoto-shrink_800_800/0/1653819338773?e=2147483647&v=beta&t=XTfoOnmxiReUMVQ6WU70L6ahwPtZdXoaopjK3SdgDCA",
      imgSize: 100
    },
    {
      name: "budi",
      wealth: 200000000000000, // 200 billion
      age: 25,
      imgSize: 100
    },
    {
      name: "joni",
      wealth: 100000000000000, // 100 billion
      age: 30,
      imgSize: 100
    },
    {
      name: "kadita",
      wealth: 100000000000000, // 100 billion
      age: 25,
      imgSize: 100
    },
    {
      name: "siti",
      wealth: 100000000000000, // 100 billion
      age: 30,
      imgSize: 100
    },
    {
      name: "aditira tamvan",
      wealth: 150000000000000, // 100 billion
      age: 30,
      imageUrl: "https://imgsrv2.voi.id/7GkhN5YW_BOMsFylAsHBm1sALKRcY0nskDu00AcoDqA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy85NDQzNS8yMDIxMTAxNDEzNTAtbWFpbi5qcGc.jpg",
      imgSize: 100
    }]);
  })

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['SSR_PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
