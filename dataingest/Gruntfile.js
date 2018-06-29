module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            files: ['gruntfile.js', 'api/controllers/*.js']
        },
        nodeunit: {
            files: ['test/api/controllers/*-test.js'],
            options: {
                reporter : 'default'
            }
        }
    });

    // Load the plugin that provides the "jshint task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'nodeunit']);
};