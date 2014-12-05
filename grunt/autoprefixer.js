/**
 * Created by ioan on 05.12.2014.
 */

module.exports = {
    build: {
        expand: true,
        cwd: '<%= BUILD_DIR_CSS %>',
        src: [ '**/*.css' ],
        dest: '<%= BUILD_DIR_CSS %>'
    }
};