/**
 * Created by wangwenbo on 16/1/9.
 */
'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  M = function M() {
    return this.model('admin');};_default.prototype.


  indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();};_default.prototype.


  loginAction = function loginAction() {var 


    adminInfo, 
    username, 
    password, 

    isAdmin;return _regeneratorRuntime.async(function loginAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.http.isAjax('post')) {context$2$0.next = 15;break;}adminInfo = this.post();username = adminInfo.username;password = adminInfo.password;context$2$0.next = 6;return _regeneratorRuntime.awrap(this.M().where({ 
            username: username, 
            password: think.md5(password) }).
          find());case 6:isAdmin = context$2$0.sent;if (!

          think.isEmpty(isAdmin)) {context$2$0.next = 11;break;}return context$2$0.abrupt('return', 
          this.error());case 11:

          delete isAdmin.password;context$2$0.next = 14;return _regeneratorRuntime.awrap(
          this.session('adminInfo', isAdmin));case 14:return context$2$0.abrupt('return', 
          this.success());case 15:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.




  logoutAction = function logoutAction() {return _regeneratorRuntime.async(function logoutAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(
          this.session('adminInfo', ''));case 2:return context$2$0.abrupt('return', 
          this.http.redirect('/admin/login'));case 3:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];