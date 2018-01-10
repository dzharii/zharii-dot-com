module.exports = {
      server: {
        cmd: 'start hugo server -D',
        cwd: '<%= sourceRoot %>'
      },
      build: {
        cmd: 'hugo',
        cwd: '<%= sourceRoot %>'
      }
};