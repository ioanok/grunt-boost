/**
 * Created by ioan on 04.12.2014.
 */

module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load grunt config
    require('load-grunt-config')(grunt, {
        // data passed into config.  Can use with <%= BUILD_DIR %>
        data: {
            BUILD_DIR :             'build/',
            BUILD_DIR_JS :          'build/js/',
            BUILD_DIR_CSS :         'build/css/',
            BUILD_DIR_IMG :         'build/img/',
            BUILD_FILE_JS :         'build/js/app.js',
            BUILD_FILE_JS_MIN :     'build/js/app.min.js',
            BUILD_FILE_CSS :        'build/css/styles.css',
            BUILD_FILE_CSS_MIN :    'build/css/styles.min.css',

            BUILD_FILE_LESS :       'build/css/style.css',
            BUILD_FILE_PROCESS :    'build/index.html',

            SRC_DIR :           'src/',
            SRC_DIR_JS :        'src/js/',
            SRC_DIR_CSS :       'src/css/',
            SRC_DIR_LESS :      'src/less/',
            SRC_DIR_IMG :       'src/img/',
            SRC_FILES_JS :      'src/js/*.js',
            SRC_FILES_CSS :     'src/css/*.css',
            SRC_FILE_LESS :     'src/less/style.less',
            SRC_FILES_LESS :    'src//less/*.less'
        }
    });
};
