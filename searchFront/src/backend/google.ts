declare var require: any;
var RSS = require('rss');
import Crud from './crud';
export async function hukum_rss(req, res) {
  let date = new Date();
  var feed = new RSS({
    title: 'Searchgurbani.com',
    link: 'http://www.searchgurbani.com/hukam/rss',
    description: 'Harmandar Sahib Hukmnama at SearchGurbani.com',
    language: 'en-en',
    copyright: 'Copyright ' + date.getFullYear(),
    generator: 'FeedCreator 1.7.3'
  });

  Crud.selectHukamnamaAmritRss(function(err, posts){
    if (err) {
      res.json(err);
    }
    else {
      for(let i = 0; i<posts.length; i++) {
        feed.item({
          title: 'Harmandir Sahib Hukumnama : ' + posts[i].date_hukam,
          description: `<![CDATA[ ${posts[i].contentEnglish}]]`,
          link: 'https://searchgurbani.com/hukum/index?dt=' + posts[i].date_hukam,
          guid: 'https://searchgurbani.com/hukum/index?dt=' + posts[i].date_hukam,
          pubDate: posts[i].date_hukam
        });
      }
      // res.setHeader('Content-type', '/xml');
      res.send(feed.xml());
    }
  });
}
