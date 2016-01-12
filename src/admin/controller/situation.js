'use strict';

import Base from './base.js';
import moment from 'moment';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
    //auto render template file index_index.html
    return this.display();
  }

  async getlistAction() {
    let id = this.post().id;
    let news = this.model('news');
    if (think.isEmpty(id)) {
      let data = await news.page(1, 10).order('id DESC').countSelect();
      this.success(data);
    } else {
      let data = await news.where({id: id}).select();
      this.success(data);
    }

  }

  async addlistAction() {
    let id = this.post().id;
    let news = this.model('news');
    if (think.isEmpty(id)) {
      let insertId = await news.add(this.post());
      this.success(insertId);
    } else {
      let data = await news.where({id: id}).update(this.post());
      this.success(data);
    }
  }

  async uploadcoverAction() {
    let _this = this;
    let uploadInfo = this.file('situation_cover');
    console.log(uploadInfo);
    var fs = require('fs');
    var newFileName = moment().format('YYYYMMDDHHmmss') + ".jpg";


    var oldPath = uploadInfo.path;
    var newPath = think.RESOURCE_PATH + '/static/img/indexCover/';

    fs.rename(oldPath, newPath + newFileName, function (err) {
      if (err) {
        console.error(err);
      } else {
        _this.success(newFileName);
      }
    });
  }

  async delcoverAction() {
    var fs = require('fs');
    let imgPath = think.RESOURCE_PATH + '/static/img/indexCover/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }

  async delnewsAction() {
    var fs = require('fs');
    let news = this.model('news');
    let delNews = await news.where({id: this.post().id}).delete();
    let imgPath = think.RESOURCE_PATH + '/static/img/indexCover/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }


}