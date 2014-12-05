/**
 * Created by ioan on 04.12.2014.
 */

module.exports = {
    build: {
        src: [ '<%= BUILD_DIR %>' ]
    },

    stylesheets: {
        src: [ '<%= BUILD_DIR_CSS %>**/*.css', '!<%= BUILD_FILE_CSS %>', '!<%= BUILD_FILE_CSS_MIN %>' ]
    },

    scripts: {
        src: [ '<%= BUILD_DIR_JS %>**/*.js', '!<%= BUILD_FILE_JS %>', '!<%= BUILD_FILE_JS_MIN %>' ]
    },

    images: {
        src: [ '<%= BUILD_DIR_IMG %>' ]
    }
};