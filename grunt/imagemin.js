/**
 * Created by ioan on 04.12.2014.
 */

module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: '<%= BUILD_DIR_IMG %>',
            src: [ '**/*.{png,jpg,gif}' ],
            dest: '<%= BUILD_DIR_IMG %>'
        }]
    }
};