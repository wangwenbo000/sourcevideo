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
  indexAction() {
    //auto render template file index_index.html
    return this.display();
  }

  async getlistAction() {
    let id = this.post().id;
    let video = this.model('video');
    if (think.isEmpty(id)) {
      let data = await video.page(1, 10).order('id DESC').countSelect();
      this.success(data);
    } else {
      let data = await video.where({id: id}).select();
      this.success(data);
    }
  }
  async addAction(){
    let id = this.post().id;
    let video = this.model('video');
    if (think.isEmpty(id)) {
      //增加新纪录
      let isGetAccessToken = await this.session("access_token");
      if(think.isEmpty(isGetAccessToken)){
        var options = {
          uri: 'https://openapi.iqiyi.com/api/oauth2/authorize',
          qs: {
            client_id:'48dbe76f47d7458690f08bbcb17d5f2c',
            redirect_uri:'http://www.sourcevideo.net',
            response_type:'code'
          },
          headers: {
            'User-Agent': 'Request-Promise'
          },
          json: true // Automatically parses the JSON string in the response
        };

        let response = await rp(options);
        console.log(response);
      }
    } else {
      //更新记录
      let data = await video.where({id: id}).update(this.post());
      this.success(data);
    }
  }
  async uploadvideocoverAction(){
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
  async uploadvideoAction(){
    this.success(this.file('video').path);
  }
}