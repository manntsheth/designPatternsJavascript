var repo = function () {
//var db;  this has all the db related sensitive information which is not provided out of this scope
var get=function (id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db'
            } //returning a json object
        };
var save=function (task) {
            console.log('Saving' + task.name + 'to the db');
        };
    return {
        get: get, //get function over

        save: save
    }
}

module.exports = repo();