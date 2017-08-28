/*//CommonJS
var nameModule = require('./a.js');       //相当于nameModule调用了JS的require函数，该方法读取一个文件并执行，返回内部的module.exports对象。
nameModule.printName();*/


//AMD
require(['dependency'], function (my){
    my.printName(); });




/*
//CommonJS和AMD加载模块写法比较
//CommonJS
var carousel=require("./carousel");
new carousel(".ct");
var tab=require("./tab");
tab.init();


//AMD规范
require(["carousel","tab","lazy"],function(Carousel,Tab,lazy){
    new Carousel();
    Tab.init();
    Lazy.init();
})*/
