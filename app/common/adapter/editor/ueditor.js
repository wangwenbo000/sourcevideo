'use strict';
/**
 * base adapter
 */var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _fs = require(
'fs');var _fs2 = _interopRequireDefault(_fs);var _path = require(
'path');var _path2 = _interopRequireDefault(_path);var _http = require(
'http');var _http2 = _interopRequireDefault(_http);var _default = (function (_think$adapter$base) {_inherits(_default, _think$adapter$base);function _default() {_classCallCheck(this, _default);_think$adapter$base.apply(this, arguments);}

  /**
   * init
   * @return {[]}         []
   */_default.prototype.
  init = function init(fileField, config, type, http) {
    type = type || "upload";
    //super.init(http);
    this.http = http;
    this.fileField = fileField;
    this.config = config;
    this.type = type;
    if (type == "remote") {
      //await this.saveRemote();
    } else if (type == "base64") {
        this.upBase64();} else 
      {
        this.upFile();}};




  /**
   * 上传文件的主处理方法
   * @return mixed
   */_default.prototype.
  upFile = function upFile() {
    var http = this.http;
    var file = http.file(this.fileField);
    console.log(file);
    if (!think.isFile(file.path)) {
      this.stateInfo = "找不到临时文件";
      return;}


    this.oriName = file.originalFilename;
    this.fileSize = file.size;
    this.fileType = this.getFileExt();
    this.fullName = this.getFullName();
    this.filePath = this.getFilePath();
    this.fileName = this.getFileName();
    think.mkdir(this.filePath.replace(this.fileName, ""));
    //检查文件大小是否超出限制
    if (!this.checkSize()) {
      this.stateInfo = "文件大小超出网站限制";
      return;}

    //检查是否不允许的文件格式
    if (!this.checkType()) {
      this.stateInfo = "文件类型不允许";
      return;}

    //移动文件
    _fs2['default'].renameSync(file.path, this.filePath);
    if (think.isFile(this.filePath)) {
      this.stateInfo = "SUCCESS";} else 
    {
      this.stateInfo = '文件保存时出错';}};



  /**
   * 处理base64编码的图片上传
   * @return mixed
   */_default.prototype.
  upBase64 = function upBase64() 
  {
    var http = this.http;
    var base64Data = http.post(this.fileField);
    var img = new Buffer(base64Data, 'base64');
    //console.log(img.length);
    this.oriName = this.config['oriName'];
    //console.log(this.oriName);
    this.fileSize = img.length;
    this.fileType = this.getFileExt();
    this.fullName = this.getFullName();
    this.filePath = this.getFilePath();
    this.fileName = this.getFileName();
    think.mkdir(this.filePath.replace(this.fileName, ""));

    //检查文件大小是否超出限制
    //if (!this.checkSize()) {
    //  this.stateInfo = "文件大小超出网站限制";
    //  return;
    //}
    ////检查是否不允许的文件格式
    //if (!this.checkType()) {
    //  this.stateInfo = "文件类型不允许";
    //  return;
    //}
    //移动文件
    //fs.renameSync(img, this.filePath);
    _fs2['default'].writeFileSync(this.filePath, img);
    if (think.isFile(this.filePath)) {
      this.stateInfo = "SUCCESS";} else 
    {
      this.stateInfo = '文件保存时出错';}};_default.prototype.




  spiderImage = function spiderImage(imgUrl, filePath) {
    var deferred = think.defer();
    _http2['default'].get(imgUrl, function (res) {
      var imgData = "";
      res.setEncoding("binary");
      res.on("data", function (chunk) {
        imgData += chunk;});


      res.on("end", function () {
        _fs2['default'].writeFileSync(filePath, imgData, "binary");
        deferred.resolve(filePath);});});


    return deferred.promise;};

  /**
   * 拉取远程图片
   * @return mixed
   */_default.prototype.
  saveRemote = function saveRemote() {var 
    imgUrl, 







    m, 







    filePath, 
    fullName, 

    promises;return _regeneratorRuntime.async(function saveRemote$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:imgUrl = this.fileField;if (!(imgUrl.indexOf("http") !== 0)) {context$2$0.next = 4;break;}this.stateInfo = "链接不是http链接";return context$2$0.abrupt('return');case 4:m = imgUrl.match(/[\/]([^\/]*)[\.]?[^\.\/]*$/)[1];this.oriName = m ? m : ""; //console.log(this.oriName);
          this.fileSize = imgUrl.length; //TODO 这里有问题，后面弄
          this.fileType = this.getFileExt();this.fullName = this.getFullName();this.filePath = this.getFilePath();this.fileName = this.getFileName();filePath = this.filePath;fullName = this.fullName;think.mkdir(this.filePath.replace(this.fileName, ""));context$2$0.next = 16;return _regeneratorRuntime.awrap(this.spiderImage(imgUrl, filePath));case 16:promises = context$2$0.sent; // console.log(promises);
          if (think.isFile(promises)) {this.stateInfo = "SUCCESS";} else 
          {
            this.stateInfo = '文件保存时出错';}return context$2$0.abrupt('return', 

          { 
            "state": this.stateInfo, 
            "url": this.fullName, 
            "title": this.fileName, 
            "original": this.oriName, 
            "type": this.fileType, 
            "size": this.fileSize });case 19:case 'end':return context$2$0.stop();}}, null, this);};



  /**
   * 获取文件扩展名
   * @return string
   */_default.prototype.
  getFileExt = function getFileExt() 
  {

    return this.oriName.substr(this.oriName.lastIndexOf(".")).toLocaleLowerCase();};


  /**
   * 重命名文件
   * @return string
   */_default.prototype.
  getFullName = function getFullName() {
    //替换目录日期事件
    ///ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}
    var self = this;
    //var filename= this.filed;
    var format = this.config.pathFormat;
    var d = new Date();
    var t = d.getTime();
    var date = {};
    date.yyyy = d.getFullYear();
    date.mm = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    date.dd = (d.getDate() < 10 ? "0" : "") + d.getDate();
    format = format.replace("{yyyy}", date.yyyy);
    format = format.replace("{mm}", date.mm);
    format = format.replace("{dd}", date.dd);
    format = format.replace("{time}", t);
    //计算随机数
    var str = format.match(/\{rand\:[\d]*\}/i);
    var index = str[0].search(/:/) + 1;
    index = str[0].charAt(index);
    var rand = Math.random();
    rand = rand.toString();
    rand = rand.substr(2, index);
    //替换随机数
    format = format.replace(str[0], rand);
    var ext = this.getFileExt();
    return format + ext;};


  /**
   * 获取文件完整路径
   * @return string
   */_default.prototype.
  getFilePath = function getFilePath() 
  {

    if (this.fullName.substr(0, 1) != '/') {
      this.fullName = '/' + this.fullName;}


    return think.RESOURCE_PATH + this.fullName;};

  /**
   * 获取文件名
   * @return string
   */_default.prototype.
  getFileName = function getFileName() {
    return _path2['default'].basename(this.filePath);};


  /**
   * 文件类型检测
   * @return bool
   */_default.prototype.
  checkType = function checkType() 
  {
    return in_array(this.getFileExt(), this.config["allowFiles"]);};


  /**
   * 文件大小检测
   * @return bool
   */_default.prototype.
  checkSize = function checkSize() 
  {
    return this.fileSize <= this.config["maxSize"];};

  /**
   * 获取当前上传成功文件的各项信息
   * @return array
   */_default.prototype.
  getFileInfo = function getFileInfo() 
  {
    return { 
      "state": this.stateInfo, 
      "url": this.fullName, 
      "title": this.fileName, 
      "original": this.oriName, 
      "type": this.fileType, 
      "size": this.fileSize };};return _default;})(think.adapter.base);exports['default'] = _default;module.exports = exports['default']; //imgUrl = imgUrl.replace(/&amp;/,"&");
//http开头验证
//TODO 各种验证后面弄