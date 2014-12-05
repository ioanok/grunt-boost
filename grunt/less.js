/**
 * Created by ioan on 05.12.2014.
 */

module.exports = {
    development: {
        files: {
            "<%= BUILD_FILE_LESS %>": '<%= SRC_FILE_LESS %>'
        }
    },
    production: {
        options: {
            cleancss: true
        },
        files: {
            "<%= BUILD_FILE_LESS %>": '<%= SRC_FILE_LESS %>'
        }
    }
};