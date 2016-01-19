'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  M = function M() {
    return this.model('job');};_default.prototype.


  getAction = function getAction() {var 
    id, 
    pageIndex, 




    data;return _regeneratorRuntime.async(function getAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:id = this.post().id;pageIndex = this.post().page || 1;if (!think.isEmpty(id)) {context$2$0.next = 9;break;}context$2$0.next = 5;return _regeneratorRuntime.awrap(this.M().page(pageIndex, 20).order('id DESC').countSelect());case 5:data = context$2$0.sent;this.success(data);context$2$0.next = 13;break;case 9:context$2$0.next = 11;return _regeneratorRuntime.awrap(this.M().where({ id: id }).select());case 11:data = context$2$0.sent;
          this.success(data);case 13:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  addAction = function addAction() {var 
    id, 

    insertId, 


    data;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:id = this.post().id;if (!think.isEmpty(id)) {context$2$0.next = 8;break;}context$2$0.next = 4;return _regeneratorRuntime.awrap(this.M().add(this.post()));case 4:insertId = context$2$0.sent;this.success(insertId);context$2$0.next = 12;break;case 8:context$2$0.next = 10;return _regeneratorRuntime.awrap(this.M().where({ id: id }).update(this.post()));case 10:data = context$2$0.sent;
          this.success(data);case 12:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  delAction = function delAction() {var 
    deljob;return _regeneratorRuntime.async(function delAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.M().where({ id: this.post().id })['delete']());case 2:deljob = context$2$0.sent;
          this.success();case 4:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];