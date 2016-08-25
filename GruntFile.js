module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            app1: {
                files: [
                    {
                        expand: true,
                        src: ['src/js/app.js', 'src/js/controller/textSeachController.js', 'src/js/controller/mainController.js', 'src/js/filter/alphabeticalFilter.js'],
                        rename: function (dest, src) {
                            return 'annotate/' + src;
                        }
                }
            ]
            },
        },
        concat: {
            js: { //target
                src: ['./annotate/src/js/app.js', './annotate/src/js/controller/*.js',
                './annotate/src/js/filter/*.js'],
                dest: './concat/app.js'
            }
        },
        uglify: {
            js: { //target
                src: ['./concat/app.js'],
                dest: './build/app.min.js'
            }
        },
        ngdocs: {
            all: ['src/**/*.js']
        },
        cssmin:{
            
            combine:{
                files:{
                    'build/css/main.min.css' :["src/css/*.css"]
                }
            }
            
        },
       
    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-ngdocs');

    grunt.registerTask('default', ['cssmin','ngAnnotate', 'concat', 'uglify', 'ngdocs']);
};