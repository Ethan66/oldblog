/*//CommonJS
var name="Ethan";
function printName(){
    console.log(name);
}
function printFullName(firstName){
    console.log(firstName + name);
}
module.exports = {                //module.exports对象是作为模块出口,方便其他的js调用
    printName: printName,
    printFullName: printFullName
}*/


//AMD规范
define("a.js",['dependency'], function(){
    var name = 'Byron';
    function printName(){
        console.log(name);
    }

    return {
        printName: printName
    };
});
