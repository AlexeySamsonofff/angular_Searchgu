declare var require: any;
import 'zone.js/dist/zone-node';


import * as express from 'express';
import {join} from 'path';
// import * as GoogleControl from './backend/google';
const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')
// Express server
const app = express();
let sitemap;

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/searchFront');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// hukum/rss page
// app.get('/hukum/rss', (req, res)=>{
//   GoogleControl.hukum_rss(req, res);
// })

app.get('/sitemap.xml', function(req, res){
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap)
    return
  }

  try {
    const smStream = new SitemapStream({ hostname: 'https://www.searchgurbani.com/' })
    const pipeline = smStream.pipe(createGzip())

    // pipe your entries or directly write them.

    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // stream write the response
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
});

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});


// Start up the Node server
app.listen(PORT, () => {
});
