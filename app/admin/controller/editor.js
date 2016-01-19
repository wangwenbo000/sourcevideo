'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _moment = require(
'moment');var _moment2 = _interopRequireDefault(_moment);
var fs = require('fs');var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  imguploadAction = function imguploadAction() {
    var _this = this;
    var uploadInfo = this.file('tinymce_img');
    var newFileName = _moment2['default']().format('YYYYMMDDHHmmss') + ".jpg";
    var oldPath = uploadInfo.path;
    var newPath = think.RESOURCE_PATH + '/static/img/videoCover/';

    fs.rename(oldPath, newPath + newFileName, function (err) {
      err ? _this.error(err) : _this.success(newFileName);});};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];