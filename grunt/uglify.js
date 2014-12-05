/**
 * Created by ioan on 04.12.2014.
 */

module.exports = {
    build: {
        options: {
            banner: '/*\n <%= package.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
            compress : true,
            mangle: false,
            preserveComments : false
        },
        src: '<%= BUILD_FILE_JS %>',
        dest: '<%= BUILD_FILE_JS_MIN %>'
    }
};