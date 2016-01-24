'use strict';
//https://openapi.iqiyi.com/api/oauth2/authorize?client_id=48dbe76f47d7458690f08bbcb17d5f2c&response_type=code&redirect_uri=http://127.0.0.1:8360/admin?#!/addVideo/upload
var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);var _requestPromise = require('request-promise');var _requestPromise2 = _interopRequireDefault(_requestPromise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var fs = require('fs');var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


  /**
   * index action
   * @return {Promise} []
   */_class.prototype.

  M = function M() {
    return this.model('video');};_class.prototype.


  getAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      id, 
      pageIndex, 




      data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:id = this.post().id;pageIndex = this.post().page || 1;if (!think.isEmpty(id)) {_context.next = 9;break;}_context.next = 5;return this.M().page(pageIndex, 20).order('id DESC').countSelect();case 5:data = _context.sent;this.success(data);_context.next = 13;break;case 9:_context.next = 11;return this.M().where({ id: id }).select();case 11:data = _context.sent;
              this.success(data);case 13:case 'end':return _context.stop();}}}, _callee, this);}));return function getAction() {return ref.apply(this, arguments);};}();_class.prototype.



  addAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      id, 

      insertId, 


      _data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:id = this.post().id;if (!think.isEmpty(id)) {_context2.next = 8;break;}_context2.next = 4;return this.M().add(this.post());case 4:insertId = _context2.sent;this.success(insertId);_context2.next = 12;break;case 8:_context2.next = 10;return this.M().where({ id: id }).update(this.post());case 10:_data = _context2.sent;
              this.success(_data);case 12:case 'end':return _context2.stop();}}}, _callee2, this);}));return function addAction() {return ref.apply(this, arguments);};}();_class.prototype.



  delAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var _this3 = this;var 
      delvideo, 
      imgPath;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this.M().where({ id: this.post().id }).delete();case 2:delvideo = _context3.sent;imgPath = think.RESOURCE_PATH + '/static/img/videoCover/' + this.post().filename;
              fs.unlink(imgPath, function (err) {
                err ? _this3.fail() : _this3.success();});case 5:case 'end':return _context3.stop();}}}, _callee3, this);}));return function delAction() {return ref.apply(this, arguments);};}();_class.prototype.



  delcoverAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var _this4 = this;var 
      imgPath;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:imgPath = think.RESOURCE_PATH + '/static/img/videoCover/' + this.post().filename;
              fs.unlink(imgPath, function (err) {
                err ? _this4.fail() : _this4.success();});case 2:case 'end':return _context4.stop();}}}, _callee4, this);}));return function delcoverAction() {return ref.apply(this, arguments);};}();_class.prototype.



  uploadcoverAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {var 
      _this, 
      uploadInfo, 
      newFileName, 
      oldPath, 
      newPath;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this = this;uploadInfo = this.file('video_cover');newFileName = (0, _moment2.default)().format('YYYYMMDDHHmmss') + ".jpg";oldPath = uploadInfo.path;newPath = think.RESOURCE_PATH + '/static/img/videoCover/';

              fs.rename(oldPath, newPath + newFileName, function (err) {
                err ? _this.error(err) : _this.success(newFileName);});case 6:case 'end':return _context5.stop();}}}, _callee5, this);}));return function uploadcoverAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;