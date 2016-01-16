'use strict';

import Base from './base.js';
import moment from 'moment';

export default class extends Base {
  /**
   * photo action
   * @return {Promise} []
   */

  M() {
    return this.model('photo');
  }

  async addAction() {

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

  async delAction() {
    var fs = require('fs');
    let delphoto = await this.M().where({id: this.post().id}).delete();
    let imgPath = think.RESOURCE_PATH + '/static/img/photoCover/' + this.post().filename;
    fs.unlink(imgPath, (err)=> {
      err ? this.fail() : this.success();
    });
  }
}