/**
 * Created by ioan on 05.12.2014.
 */


module.exports = {
    stylesheets: {
        files: [ '<%= SRC_DIR_CSS %>**/*.css', '<%= SRC_DIR_CSS %>**/*.less' ],
        tasks: [ 'newer:copy:stylesheets', 'newer:stylesheets' ],
        options: {
            spawn: false
        }
    },

    scripts: {
        files: [ '<%= SRC_DIR_JS %>**/*.js' ],
        tasks: [ 'newer:copy:scripts', 'newer:scripts' ],
        options: {
            spawn: false
        }
    },

    images: {
        files: [ '<%= SRC_DIR_IMG %>**/*.{png,jpg,gif}' ],
        tasks: [ 'newer:copy:images', 'newer:imagemin' ],
        options: {
            spawn: false,
        }
    }
};