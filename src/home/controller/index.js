'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async getindexdataAction(){
    let model = this.model('news');
    let data = await model.page(1, 5).order('id DESC').countSelect();
    this.success(data);
  }
  async getsituationdatabyidAction(){
    let model = this.model('news');
    let data = await model.where({id:this.post().id}).select();
    this.success(data[0]);
  }
  async getvideodataAction(){
    let model = this.model('video');
    let data = await model.order('id DESC').select();
    this.success(data);
  }
  async getdesigndataAction(){
    let model = this.model('graphic');
    let data = await model.order('id DESC').countSelect();
    this.success(data);
  }
  async getvideodatabyidAction(){
    let model = this.model('video');
    let data = await model.where({id:this.post().id}).select();
    this.success(data[0]);
  }
}