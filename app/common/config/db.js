'use strict';
/**
 * db config
 * @type {Object}
 */exports.__esModule = true;exports['default'] = 
{ 
  type: 'mysql', 
  host: '182.92.213.118', 
  port: '3306', 
  name: 'sourcevideo', 
  user: 'root', 
  pwd: '15117909848', 
  prefix: 'sv_', 
  encoding: 'utf8', 
  nums_per_page: 10, 
  log_sql: true, 
  log_connect: true, 
  cache: { 
    on: true, 
    type: '', 
    timeout: 3600 }, 

  adapter: { 
    mysql: {}, 
    mongo: {} } };module.exports = exports['default'];