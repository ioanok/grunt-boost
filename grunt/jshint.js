/**
 * Created by ioan on 05.12.2014.
 */

module.exports = {
    options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
    },

    build: ['GruntFile.js', '<%= BUILD_DIR_JS %>main.js']
};