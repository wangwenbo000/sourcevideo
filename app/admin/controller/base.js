'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];exports.__esModule = true;
var http = require("http");var _default = (function (_think$controller$base) {_inherits(_default, _think$controller$base);function _default() {_classCallCheck(this, _default);_think$controller$base.apply(this, arguments);}


  /**
   * some base method in here
   */_default.prototype.
  __before = function __before() {var 
    adminInfo, 

    whereFrom;return _regeneratorRuntime.async(function __before$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.session('adminInfo'));case 2:adminInfo = context$2$0.sent;console.log(http);whereFrom = this.http.controller;if (!(
          whereFrom === 'login')) {context$2$0.next = 7;break;}return context$2$0.abrupt('return');case 7:if (!


          think.isEmpty(adminInfo)) {context$2$0.next = 10;break;}
          console.log(this.http.controller);return context$2$0.abrupt('return', 
          this.redirect("/admin/login"));case 10:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(think.controller.base);exports['default'] = _default;module.exports = exports['default'];