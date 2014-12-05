/**
 * Created by ioan on 04.12.2014.
 */

module.exports = {
    scripts: {
        src: [
            '<%= BUILD_DIR_JS %>vendor/*.js', // All JS in the vendor folder
            '<%= BUILD_DIR_JS %>plugins.js',  // This specific file
            '<%= BUILD_DIR_JS %>main.js'  // This specific file
        ],
        dest: '<%= BUILD_FILE_JS %>'
    },

    stylesheets: {
        src: [
            '<%= BUILD_DIR_CSS %>normalize.css',
            '<%= BUILD_DIR_CSS %>style.css', // the file resulted from less compilation
            '<%= BUILD_DIR_CSS %>main.css',
        ],
        dest: '<%= BUILD_FILE_CSS %>'
    }
};