'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}





  /**
   * photo action
   * @return {Promise} []
   */_class.prototype.

  M = function M() {
    return this.model('photo');};_class.prototype.


  addAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:case 'end':return _context.stop();}}}, _callee, this);}));return function addAction() {return ref.apply(this, arguments);};}();_class.prototype.



  getAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      id, 
      pageIndex, 




      data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:id = this.post().id;pageIndex = this.post().page || 1;if (!think.isEmpty(id)) {_context2.next = 9;break;}_context2.next = 5;return this.M().page(pageIndex, 20).order('id DESC').countSelect();case 5:data = _context2.sent;this.success(data);_context2.next = 13;break;case 9:_context2.next = 11;return this.M().where({ id: id }).select();case 11:data = _context2.sent;
              this.success(data);case 13:case 'end':return _context2.stop();}}}, _callee2, this);}));return function getAction() {return ref.apply(this, arguments);};}();_class.prototype.



  delAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var _this2 = this;var 
      fs, 
      delphoto, 
      imgPath;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:fs = require('fs');_context3.next = 3;return this.M().where({ id: this.post().id }).delete();case 3:delphoto = _context3.sent;imgPath = think.RESOURCE_PATH + '/static/img/photo/' + this.post().filename;
              fs.unlink(imgPath, function (err) {
                err ? _this2.fail() : _this2.success();});case 6:case 'end':return _context3.stop();}}}, _callee3, this);}));return function delAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;