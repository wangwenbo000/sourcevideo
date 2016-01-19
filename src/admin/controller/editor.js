'use strict';

import Base from './base.js';
import moment from 'moment';
var fs = require('fs');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  imguploadAction(){
    let _this = this;
    let uploadInfo = this.file('tinymce_img');
    var newFileName = moment().format('YYYYMMDDHHmmss') + ".jpg";
    var oldPath = uploadInfo.path;
    var newPath = think.RESOURCE_PATH + '/static/img/videoCover/';

    fs.rename(oldPath, newPath + newFileName, function (err) {
      err ? _this.error(err) : _this.success(newFileName);
    });
  }
}