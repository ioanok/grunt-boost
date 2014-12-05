/**
 * Created by ioan on 05.12.2014.
 */

module.exports = {
    build: {
        cwd: '<%= SRC_DIR %>',
        src: [ '**', '!index.html.dist', '!**/less/**' ],
        dest: '<%= BUILD_DIR %>',
        expand: true
    },

    stylesheets: {
        cwd: '<%= SRC_DIR_CSS %>',
        src: [ '**' ],
        dest: '<%= BUILD_DIR_CSS %>',
        expand: true
    },

    scripts: {
        cwd: '<%= SRC_DIR_JS %>',
        src: [ '**' ],
        dest: '<%= BUILD_DIR_JS %>',
        expand: true
    },

    images: {
        cwd: '<%= SRC_DIR_IMG %>',
        src: [ '**' ],
        dest: '<%= BUILD_DIR_IMG %>',
        expand: true
    }
};