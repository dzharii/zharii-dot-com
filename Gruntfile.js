'use strict';
const path = require('path');
const fs = require('fs');
const getConfig = require('./MyBuildConfig');


module.exports = function(grunt) {

  let config = getConfig(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, '_grunt/config'),
    jitGrunt: {
      customTasksDir: '_grunt/tasks'
    },
    data: config
  });
};