---
title: JavaScript原型继承
tags: JavaScript
---


what
why
how
good and bad
compare




new关键字
返回一个对象


#### 原型
每种引用类型(Array, Object, Function)都有一个`__proto__`属性, 指向构造器的`prototype`

Function类型的有一个`prototype`属性

#### 原型链

取对象的属性或者方法时, 会沿着__proto__一直找下去, 从而实现方法的继承

var a = function(){
    this.name = 'leo'
    this.age = 18
}
a.prototype = {
    showName: function(){console.log(this.name)}
}


var b = function(){}
b.prototype = new a


b.prototype.showAge = function(){console.log(this.age)}



var c = new b()


