'use strict';
//https://openapi.iqiyi.com/api/oauth2/authorize?client_id=48dbe76f47d7458690f08bbcb17d5f2c&response_type=code&redirect_uri=http://127.0.0.1:8360/admin?#!/addVideo/upload
var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require('./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _moment = require(
'moment');var _moment2 = _interopRequireDefault(_moment);var _requestPromise = require(
'request-promise');var _requestPromise2 = _interopRequireDefault(_requestPromise);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.

  M = function M() {
    return this.model('video');};_default.prototype.


  getAction = function getAction() {var 
    id, 
    pageIndex, 




    data;return _regeneratorRuntime.async(function getAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:id = this.post().id;pageIndex = this.post().page || 1;if (!think.isEmpty(id)) {context$2$0.next = 9;break;}context$2$0.next = 5;return _regeneratorRuntime.awrap(this.M().page(pageIndex, 20).order('id DESC').countSelect());case 5:data = context$2$0.sent;this.success(data);context$2$0.next = 13;break;case 9:context$2$0.next = 11;return _regeneratorRuntime.awrap(this.M().where({ id: id }).select());case 11:data = context$2$0.sent;
          this.success(data);case 13:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  addAction = function addAction() {return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  delAction = function delAction() {var 
    fs, 
    delvideo, 
    imgPath;return _regeneratorRuntime.async(function delAction$(context$2$0) {var _this2 = this;while (1) switch (context$2$0.prev = context$2$0.next) {case 0:fs = require('fs');context$2$0.next = 3;return _regeneratorRuntime.awrap(this.M().where({ id: this.post().id })['delete']());case 3:delvideo = context$2$0.sent;imgPath = think.RESOURCE_PATH + '/static/img/videoCover/' + this.post().filename;
          fs.unlink(imgPath, function (err) {
            err ? _this2.fail() : _this2.success();});case 6:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  delcoverAction = function delcoverAction() {var 
    fs, 
    imgPath;return _regeneratorRuntime.async(function delcoverAction$(context$2$0) {var _this3 = this;while (1) switch (context$2$0.prev = context$2$0.next) {case 0:fs = require('fs');imgPath = think.RESOURCE_PATH + '/static/img/indexCover/' + this.post().filename;
          fs.unlink(imgPath, function (err) {
            err ? _this3.fail() : _this3.success();});case 3:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  uploadvideocoverAction = function uploadvideocoverAction() {var 
    _this, 
    filename, 
    uploadInfo, 
    fs, 
    newFileName, 
    oldPath, 
    newPath;return _regeneratorRuntime.async(function uploadvideocoverAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:_this = this;filename = this.post().filename;uploadInfo = this.file('video_cover');fs = require('fs');newFileName = think.isEmpty(filename) ? _moment2['default']().format('YYYYMMDDHHmmss') + ".jpg" : filename;oldPath = uploadInfo.path;newPath = think.RESOURCE_PATH + '/static/img/videoCover/';
          fs.rename(oldPath, newPath + newFileName, function (err) {
            if (err) {
              console.error(err);} else 
            {
              _this.success(newFileName);}});case 8:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.




  uploadvideoAction = function uploadvideoAction() {return _regeneratorRuntime.async(function uploadvideoAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:
          this.success(this.file('video').path);case 1:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];