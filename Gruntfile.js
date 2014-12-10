/**
 * Created by 동준 on 2014-12-10.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify 설정
        uglify: {
            options: {
                banner : '/*! <%= pkg.version %> */\n'
            },
            build: {
                src: 'js/johayo-clock.js', //uglify할 대상 설정
                dest: 'js/johayo-clock.min.js' //uglify 결과 파일 설정
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
            },
            minify:{
                files: {
                    'css/clock.min.css': ['css/clock.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};