/**
 * Created by ioan on 05.12.2014.
 */

module.exports = {
    build: {
        options: {
            banner: '/*\n <%= package.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
        },
        src: '<%= BUILD_FILE_CSS %>',
        dest: '<%= BUILD_FILE_CSS_MIN %>'
    }
};