declare var require: any;
var mysql = require('mysql');
import config from './env';
var connection = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.db
});
export default connection;
