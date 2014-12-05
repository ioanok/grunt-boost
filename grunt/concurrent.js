/**
 * Created by ioan on 05.12.2014.
 */

module.exports = {
    first: [ 'clean:build' ],
    second: [ 'newer:copy:build' ],
    third: [ 'stylesheets', 'scripts', 'newer:imagemin', 'newer:processhtml' ] // run concurrently since are independent from each other
};