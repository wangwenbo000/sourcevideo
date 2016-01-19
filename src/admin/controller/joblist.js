'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  M() {
    return this.model('job');
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
    let deljob = await this.M().where({id: this.post().id}).delete();
    this.success();
  }
}