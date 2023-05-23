module.exports = function(grunt) {
    grunt.initConfig({
      // Configurações do Grunt

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    'dist/css/style.css': 'src/less/style.less'
                }
        }
    },
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            my_target: {
                files: {
                    'dist/js/script.min.js': ['src/js/main.js']
            }
        }
    },
        watch: {
            styles: {
                files: ['src/less/style.less'],
                tasks: ['less'],
                options: {
                    livereload: true
            }
        },
        scripts: {
            files: ['src/js/main.js'],
            tasks: ['uglify'],
            options: {
                livereload: true
            }
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify']);
};
