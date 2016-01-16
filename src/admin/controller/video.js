'use strict';
//https://openapi.iqiyi.com/api/oauth2/authorize?client_id=48dbe76f47d7458690f08bbcb17d5f2c&response_type=code&redirect_uri=http://127.0.0.1:8360/admin?#!/addVideo/upload
import Base from './base.js';
import moment from 'moment';
import rp from 'request-promise';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */

  M(){
    return this.model('video');
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

  }

  async delAction() {
    var fs = require('fs');
    let delvideo = await this.M().where({id: this.post().id}).delete();
    let imgPath = think.RESOURCE_PATH + '/static/img/videoCover/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }

  async delcoverAction() {
    var fs = require('fs');
    let imgPath = think.RESOURCE_PATH + '/static/img/indexCover/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }

  async uploadvideocoverAction() {
    var _this = this;
    let filename = this.post().filename;
    let uploadInfo = this.file('video_cover');
    var fs = require('fs');
    var newFileName = think.isEmpty(filename) ? moment().format('YYYYMMDDHHmmss') + ".jpg" : filename;
    var oldPath = uploadInfo.path;
    var newPath = think.RESOURCE_PATH + '/static/img/videoCover/';
    fs.rename(oldPath, newPath + newFileName, function (err) {
      if (err) {
        console.error(err);
      } else {
        _this.success(newFileName);
      }
    });
  }

  async uploadvideoAction() {
    this.success(this.file('video').path);
  }
}