'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  database: 'sourcevideo',
  user: 'root',
  password: '',
  prefix: 'sv_',
  encoding: 'utf8mb4',
  nums_per_page: 10,
  log_sql: true,
  log_connect: true,
  cache: {
    on: true,
    type: '',
    timeout: 3600
  },
  adapter: {
    mysql: {},
    mongo: {}
  }
};