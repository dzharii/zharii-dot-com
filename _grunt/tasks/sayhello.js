module.exports = function(grunt) {
    grunt.task.registerTask('sayhello', 'Says hello', function() {
        grunt.log.writeln("Hello, World!")
    })
};