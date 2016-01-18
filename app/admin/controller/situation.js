'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _moment = require(
'moment');var _moment2 = _interopRequireDefault(_moment);
var fs = require('fs');var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  M = function M() {
    return this.model('news');};


  //查询
  _default.prototype.getlistAction = function getlistAction() {var 
    id, 
    pageIndex, 




    data;return _regeneratorRuntime.async(function getlistAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:id = this.post().id;pageIndex = this.post().page || 1;if (!think.isEmpty(id)) {context$2$0.next = 9;break;}context$2$0.next = 5;return _regeneratorRuntime.awrap(this.M().page(pageIndex, 20).order('id DESC').countSelect());case 5:data = context$2$0.sent;this.success(data);context$2$0.next = 13;break;case 9:context$2$0.next = 11;return _regeneratorRuntime.awrap(this.M().where({ id: id }).select());case 11:data = context$2$0.sent;
          this.success(data);case 13:case 'end':return context$2$0.stop();}}, null, this);};



  //增加&更新
  _default.prototype.addlistAction = function addlistAction() {var 
    id, 

    insertId, 


    data;return _regeneratorRuntime.async(function addlistAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:id = this.post().id;if (!think.isEmpty(id)) {context$2$0.next = 8;break;}context$2$0.next = 4;return _regeneratorRuntime.awrap(this.M().add(this.post()));case 4:insertId = context$2$0.sent;this.success(insertId);context$2$0.next = 12;break;case 8:context$2$0.next = 10;return _regeneratorRuntime.awrap(this.M().where({ id: id }).update(this.post()));case 10:data = context$2$0.sent;
          this.success(data);case 12:case 'end':return context$2$0.stop();}}, null, this);};



  //改
  _default.prototype.uploadcoverAction = function uploadcoverAction() {var 
    _this, 
    uploadInfo, 
    newFileName, 
    oldPath, 
    newPath;return _regeneratorRuntime.async(function uploadcoverAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:_this = this;uploadInfo = this.file('situation_cover');newFileName = _moment2['default']().format('YYYYMMDDHHmmss') + ".jpg";oldPath = uploadInfo.path;newPath = think.RESOURCE_PATH + '/static/img/indexCover/';

          fs.rename(oldPath, newPath + newFileName, function (err) {
            err ? _this.error(err) : _this.success(newFileName);});case 6:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  delcoverAction = function delcoverAction() {var 
    imgPath;return _regeneratorRuntime.async(function delcoverAction$(context$2$0) {var _this2 = this;while (1) switch (context$2$0.prev = context$2$0.next) {case 0:imgPath = think.RESOURCE_PATH + '/static/img/indexCover/' + this.post().filename;
          fs.unlink(imgPath, function (err) {
            err ? _this2.fail() : _this2.success();});case 2:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  delnewsAction = function delnewsAction() {var 
    delNews, 
    imgPath;return _regeneratorRuntime.async(function delnewsAction$(context$2$0) {var _this3 = this;while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.M().where({ id: this.post().id })['delete']());case 2:delNews = context$2$0.sent;imgPath = think.RESOURCE_PATH + '/static/img/indexCover/' + this.post().filename;
          fs.unlink(imgPath, function (err) {
            err ? _this3.fail() : _this3.success();});case 5:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];