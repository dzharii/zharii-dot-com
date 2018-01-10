/*
    exports function that returns final and merged configuration 
    that you can use as your grunt "data" 

    Example: 

    const getConfig = require('./MyBuildConfig')
    let config = getGruntConfig(grunt);

*/
const path = require('path');
const fs = require('fs');

module.exports = function(grunt) {
  let env = grunt.option('env');
  if (!env) {
    env = 'local';
    grunt.log.writeln(`Current environment: ${env}`);
    grunt.log.writeln(`Note, use the following command to set a different environment:\ngrunt <taskname> --env=environmentName`);
  }  

  let environments = [
    {
      applyTo: "all",
      nowTime: new Date().valueOf(),
      sourceRoot: path.join(__dirname, '.')
    },
    {
      applyTo: "local",
    },    
    {
      applyTo: "cloud",
    }
  ];

  let finalMergedConfig = {};
  let mergeCount = 0;

  for (let entry of environments) {
    
    if (!entry.applyTo) {
      continue;
    }

    let applyTo = entry.applyTo;

    let isMatchedToEnv =  applyTo === 'all' || applyTo === env;
                          
    if (isMatchedToEnv) {
      finalMergedConfig = Object.assign(finalMergedConfig, entry);
      mergeCount++;
    }
  }
  if (mergeCount === 0) {
    grunt.fail.fatal(`The parameter env <{env}> does not match any existing environment configuration`);
  }
  return finalMergedConfig;
}