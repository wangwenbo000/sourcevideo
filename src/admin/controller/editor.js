'use strict';

import Base from './base.js';
import moment from 'moment';
var fs = require('fs');
var ueditor = require('ueditor');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  imguploadAction(){
    this.get();

  }
}