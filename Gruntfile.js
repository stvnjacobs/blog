module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: "small",
            width: 160,
            height: 120
          },{
            name: 'medium',
            width: 320,
            height: 240
          },{
            name: 'large',
            width: 640,
            height: 480
          }]
        },
        files: [{
          expand: true,
          cwd: 'scanner/',
          src: ['**/*.{jpg,gif,png}'],
          custom_dest: 'tmp/images/{%= name %}/'
        }]
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        },
        files: [{
          expand: true,
          cwd: 'tmp/images/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'images/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'styles',
          src: 'main.scss',
          dest: 'css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('resize', ['responsive_images']);
  grunt.registerTask('min', ['imagemin']);
  grunt.registerTask('default', ['sass']);

};
