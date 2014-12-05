/**
 * Created by ioan on 04.12.2014.
 */

module.exports = function(grunt) {
    /*return {
        "stylesheets":  [ 'less:development', 'autoprefixer', 'concat:stylesheets', 'cssmin'*//*, 'clean:stylesheets'*//* ],
        "scripts": [ 'jshint', 'concat:scripts', 'uglify'*//*, 'clean:scripts'*//* ],
        "build": [ 'clean:build', 'newer:copy:build', 'newer:stylesheets', 'newer:scripts', 'newer:imagemin', 'newer:processhtml' ],
        "default": [ 'build', 'watch' ]
    };*/

    return {
        "stylesheets":  [ 'newer:less:development', 'newer:autoprefixer', 'newer:concat:stylesheets', 'newer:cssmin' ],
        "scripts": [ 'newer:jshint', 'newer:concat:scripts', 'newer:uglify' ],
        "build": [ 'concurrent:first', 'concurrent:second', 'concurrent:third' ],
        "default": [ 'build', 'watch' ]
    };
};