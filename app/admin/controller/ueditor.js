'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _fs = require(
'fs');var _fs2 = _interopRequireDefault(_fs);var _path = require(
'path');var _path2 = _interopRequireDefault(_path);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.

  init = function init(http) {
    _Base.prototype.init.call(this, http);};

  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  indexAction = function indexAction() {var 


    action, 
    result;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0: //auto render template file index_index.html
          this.config = this.config("ueditor");action = this.get("action");result = undefined;context$2$0.t0 = action;context$2$0.next = context$2$0.t0 === 
          'config' ? 6 : context$2$0.t0 === 





          'uploadimage' ? 8 : context$2$0.t0 === 

          'uploadscrawl' ? 8 : context$2$0.t0 === 

          'uploadvideo' ? 8 : context$2$0.t0 === 

          'uploadfile' ? 8 : context$2$0.t0 === 






          'listimage' ? 10 : context$2$0.t0 === 



          'listfile' ? 12 : context$2$0.t0 === 




          'catchimage' ? 14 : 18;break;case 6:result = this.config;return context$2$0.abrupt('break', 20);case 8:result = this.uploads(); //console.log(result);
          return context$2$0.abrupt('break', 20);case 10:result = this.uploadlist();return context$2$0.abrupt('break', 20);case 12:result = this.uploadlist();return context$2$0.abrupt('break', 20);case 14:context$2$0.next = 16;return _regeneratorRuntime.awrap(this.crawler());case 16:result = context$2$0.sent;return context$2$0.abrupt('break', 20);case 18:



          result = { 
            state: '请求地址出错' };return context$2$0.abrupt('break', 20);case 20:




          //返回结果
          this.jsonp(result);case 21:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.



  uploads = function uploads() {
    /**
     * 得到上传文件所对应的各个参数,数组结构
     * obj={
     *     "state" : "",          //上传状态，上传成功时必须返回"SUCCESS"
     *     "url" : "",            //返回的地址
     *     "title" : "",          //新文件名
     *     "original" : "",       //原始文件名
     *     "type" : "" ,           //文件类型
     *     "size" : "",           //文件大小
     * }
     */
    var action = this.get("action");
    var base64 = "upload";
    var config = {};
    var fieldName = undefined;
    switch (action) {
      case 'uploadimage':
        config = { 
          pathFormat: this.config['imagePathFormat'], 
          maxSize: this.config['imageMaxSize'], 
          allowFiles: this.config['imageAllowFiles'] };

        fieldName = this.config['imageFieldName'];
        break;
      case 'uploadscrawl':
        config = { 
          "pathFormat": this.config['scrawlPathFormat'], 
          "maxSize": this.config['scrawlMaxSize'], 
          "allowFiles": this.config['scrawlAllowFiles'], 
          "oriName": "scrawl.png" };

        fieldName = this.config['scrawlFieldName'];
        base64 = "base64";
        break;
      case 'uploadvideo':
        config = { 
          "pathFormat": this.config['videoPathFormat'], 
          "maxSize": this.config['videoMaxSize'], 
          "allowFiles": this.config['videoAllowFiles'] };

        fieldName = this.config['videoFieldName'];
        break;
      case 'uploadfile':
      default:
        config = { 
          "pathFormat": this.config['filePathFormat'], 
          "maxSize": this.config['fileMaxSize'], 
          "allowFiles": this.config['fileAllowFiles'] };

        fieldName = this.config['fileFieldName'];
        break;}

    //return self.uploader(fieldName, config, oriName, size, path, base64);
    var up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter
    var upload = new up(fieldName, config, base64, this.http); //实例化 Adapter
    return upload.getFileInfo();};



  //抓取远程图片
  _default.prototype.crawler = function crawler() {var 

    config, 





    fieldName, 
    source, 
    list, _iterator, _isArray, _i, _ref, 
    imgUrl, 
    up, 
    upload, 
    info;return _regeneratorRuntime.async(function crawler$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:config = { "pathFormat": this.config['catcherPathFormat'], "maxSize": this.config['catcherMaxSize'], "allowFiles": this.config['catcherAllowFiles'], "oriName": "remote.png" };fieldName = this.config['catcherFieldName'];source = this.post(fieldName + "[]");list = [];_iterator = source, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);case 5:if (!_isArray) {context$2$0.next = 11;break;}if (!(_i >= _iterator.length)) {context$2$0.next = 8;break;}return context$2$0.abrupt('break', 24);case 8:_ref = _iterator[_i++];context$2$0.next = 15;break;case 11:_i = _iterator.next();if (!_i.done) {context$2$0.next = 14;break;}return context$2$0.abrupt('break', 24);case 14:_ref = _i.value;case 15:imgUrl = _ref;up = think.adapter("editor", "ueditor");upload = new up(imgUrl, config, "remote");context$2$0.next = 20;return _regeneratorRuntime.awrap(upload.saveRemote());case 20:info = context$2$0.sent;
          //console.log(info);
          list.push({ "state": "SUCCESS", "url": info.url, "size": 431521, "title": info.title, "original": info.original, "source": imgUrl });case 22:context$2$0.next = 5;break;case 24:return context$2$0.abrupt('return', 


          { 
            state: !think.isEmpty(list) ? 'SUCCESS' : 'ERROR', 
            list: list });case 25:case 'end':return context$2$0.stop();}}, null, this);};



  /**
   * 获取已上传的文件列表
   */_default.prototype.
  uploadlist = function uploadlist() {
    var allowFiles, listSize, path;
    //判断类型
    switch (this.get("action")) {
      //列出文件
      case 'listfile':
        allowFiles = this.config['fileManagerAllowFiles'];
        listSize = this.config['fileManagerListSize'];
        path = this.config['fileManagerListPath'];
        break;
      //列出图片
      case 'listimage':
      default:
        allowFiles = this.config['imageManagerAllowFiles'];
        listSize = this.config['imageManagerListSize'];
        path = this.config['imageManagerListPath'];}

    //allowFiles = allowFiles.join("").replace(/[.]/g,"|").substr(1);
    /* 获取参数 */
    var size = this.get('size') ? this.get('size') : listSize;
    var start = this.get('start') ? this.get('start') : 0;
    var end = parseInt(size) + parseInt(start);
    /* 获取文件列表 */
    path = path.substr(0, path.lastIndexOf("/"));
    var files = this.scanFolder(path).files;
    if (files.length == 0) {
      return { 
        "state": "no match file", 
        "list": [], 
        "start": start, 
        "total": files.length };}


    /* 获取指定范围的列表 */
    var len = files.length;
    var files_n = [];
    for (var i = 0; i < len; i++) {
      var t = files[i].substr(files[i].lastIndexOf(".")).toLocaleLowerCase();
      if (in_array(t, allowFiles)) {
        files_n.push(files[i]);}}



    var lenn = files_n.length;
    for (var i = Math.min(end, lenn) - 1, list = []; i < lenn && i >= 0 && i >= start; i--) {
      var f = files_n[i];
      list.push({ url: f });}


    return { 
      "state": "SUCCESS", 
      "list": list, 
      "start": start, 
      "total": files.length };};



  /**
   * 遍历获取目录下的指定类型的文件
   */_default.prototype.
  scanFolder = function scanFolder(path) {
    var fileList = [], 
    folderList = [], 
    walk = function walk(path, fileList, folderList) {
      var files = _fs2['default'].readdirSync(think.RESOURCE_PATH + "/" + path);
      files.forEach(function (item) {
        var tmpPath = path + '/' + item, 
        stats = _fs2['default'].statSync(think.RESOURCE_PATH + "/" + tmpPath);

        if (stats.isDirectory()) {
          walk(tmpPath, fileList, folderList);
          folderList.push(tmpPath);} else 
        {
          fileList.push(tmpPath);}});};




    walk(path, fileList, folderList);

    console.log('扫描' + path + '成功');

    return { 
      'files': fileList, 
      'folders': folderList };};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; /* 上传图片 */ /* 上传涂鸦 */ /* 上传视频 */ /* 上传文件 */ /* 列出图片 */ /* 列出文件 */ /* 抓取远程文件 */ /* 上传配置 */ //加载名为 ueditor 的 editor Adapter
//实例化 Adapter
//console.log(think.isEmpty(list));