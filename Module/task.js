/*
 */

var task = {};
// var task=Object.create(Object.prototype);
//var task=new Object();
task.title = 'my task';
task.description = 'my description';
task.toString = function () {
    return this.title;
}
//console.log(task.title);
//console.log(task.toString());


Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

task.toString = 'hi'; //won't work because it is not writable
//console.log('task.toString=' + task.toString); //gives unction () {   return this.title + ' ' + this.description; }
var urgentTask = Object.create(task);

urgentTask.toString = 'hello';
//console.log('urgentTask.toString=' + urgentTask.toString); //gives unction () {   return this.title + ' ' + this.description; }

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + 'is urgent';
    },
    writable: false,
    configurablea: false,
    enumerable: false
});

//console.log('urgentTask.toString=' + urgentTask.toString); //gives function () {         return this.title + 'is urgent';     }


var newTaskObj = function (name) {
    this.name = name;
    this.completed = false;
}
newTaskObj.prototype.complete = function () {
    console.log('completing task:'+this.name);
    this.completed = true;
};

newTaskObj.prototype.save = function () {
    console.log('saving task:' + this.name);
};

module.exports = newTaskObj;