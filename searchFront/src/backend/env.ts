var env = {
  mode: 'dev', //  'prod' or 'dev'
}

var config = {
  host: 'localhost',
  port: 3306,
  db: env.mode === 'dev' ? 'searchv2' : 'searchgu_2020',
  username: env.mode === 'dev' ? 'root' : 'searchgu_2020',
  password: env.mode === 'dev' ? '' : 'R!8,c8_)3=e6'
};

export default config;
