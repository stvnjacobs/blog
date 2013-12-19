module.exports = function(grunt) {

        grunt.initConfig({
                imagemin: {
                        dynamic: {
                                options: {
                                        optimizationLevel: 3,
                                        progressive: true,
                                        interlaced: true
                                },
                                files: [{
                                        expand: true,
                                        cwd: 'images-raw/',
                                        src: ['**/*.{png,jpg,jpeg,gif}'],
                                        dest: 'images/'
                                }]
                        }
                }    
        });

        grunt.loadNpmTasks('grunt-contrib-imagemin');

        grunt.registerTask('default', ['imagemin']);

};
