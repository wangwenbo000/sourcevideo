'use strict';

import Base from './base.js';
import moment from 'moment';
var fs = require('fs');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  M(){
    return this.model('graphic');
  }

  async getAction() {
    let id = this.post().id;
    let pageIndex = this.post().page || 1;
    if (think.isEmpty(id)) {
      let data = await this.M().page(pageIndex, 20).order('id DESC').countSelect();
      this.success(data);
    } else {
      let data = await this.M().where({id: id}).select();
      this.success(data);
    }
  }

  async addAction() {
    let id = this.post().id;
    if (think.isEmpty(id)) {
      let insertId = await this.M().add(this.post());
      this.success(insertId);
    } else {
      let data = await this.M().where({id: id}).update(this.post());
      this.success(data);
    }
  }

  async delAction() {
    let delGraphic = await this.M().where({id: this.post().id}).delete();
    let imgPath = think.RESOURCE_PATH + '/static/img/graphic/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }

  async delcoverAction() {
    let imgPath = think.RESOURCE_PATH + '/static/img/graphic/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }

  async uploadcoverAction() {
    let _this = this;
    let uploadInfo = this.file('graphic_cover');
    var newFileName = moment().format('YYYYMMDDHHmmss') + ".jpg";
    var oldPath = uploadInfo.path;
    var newPath = think.RESOURCE_PATH + '/static/img/graphic/';

    fs.rename(oldPath, newPath + newFileName, function (err) {
      err ? _this.error(err) : _this.success(newFileName);
    });
  }
}