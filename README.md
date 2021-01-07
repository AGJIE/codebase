# 语言基础

## 执行顺序

检查装载：会先检测代码的语法错误，进行变量、函数的声明

执行阶段：变量的赋值、函数的调用等，都属于执行阶段。



## 数组

数据的有序列表，可以存放任意类型的数据，数组的大小可以动态调整。

### 创建数组方式

#### 数组字面量

```
var arr = [];
var arr2 = [1,2,3];
var arr3 = ["a", "b"];
var arr4 = [true, 1, 2, "white", {}];
```

#### Array的构造函数

```javascript
var arr4 = new Array();
var arr5 = new Array(10);//创建长度为10的数组
var arr6 = new Array("black", "white", "red");//创建一个包含3个字符串的数组
var arr7 = new Array(1, true, "white", {}); 
```

### 获取值与赋值

```javascript
var colors = ["red", "black", "white"];

//获取值
var str = colors[0];

//赋值
colors[3] = "yellow";
```

### 数组的长度：length

```
//获取或设置数组中元素的个数
var sum = [12,35,62,84,59,16,15,27];

var total = sum.length;//获取数组中元素的个数
sum.length = 4;//设置数组中元素的个数
```

## 函数

函数：函数就是可以重复执行的代码块

### 函数定义 | 调用：

```javascript
//定义
function add() { //add 函数名
	//程序
}

//调用
add();
```

### 传递参数

ECMAScript中，所有函数的参数都是按值传递的

### 形参 | 实参

形参：相当于函数中定义的变量

实参：在运行时的函数调用时传入的参数。

说明白就是，形参就是函数声明时的变量，实参是我们调用该函数时传入的具体参数。

#### 特性：

其它语言中实参个数必须和形参个数一致，但是JavaScript中没有函数签名的概念，实参个数和形参个数可以不相等

### 重载-没有

函数重载：一组具有相同名字，不同参数列表的函数或者方法;

### 返回值

- 未显式地设置函数的返回值，函数默认返回：undefined
- 每个函数都有一个返回值，返回值通过“*return*”进行设置
- 在函数中，一旦执行完“return”语句，后续语句将不再执行；
- “return”的值只能有一个。如果需要函数返回多个值，只有将值组合成一个对象或数组进行返回

### 定义方式

#### 函数声明

```
function add(num1, num2) {
	return num1+num2;
}
```

#### 函数表达式

```javascript
//第一种
var add = function(num1, num2) {
	return num1+num2;
}

//第二种
(function text() {....})

//第三种
!function text() {...}
```

两者区别：

函数表达式：函数只有在var语句声明之后才能被调用，函数表达式是在函数运行阶段才赋值给变量

函数声明：函数可以在function声明之前被调用，函数表达式是在代码运行阶段之前, 也就是代码解析阶段赋值

### 匿名函数

匿名函数，从字面意思理解，没有名字的函数

用法：

- 赋值
- 自我执行

#### 作用：

##### 赋值给某一个事件

```javascript
windon.onload = function() {
	alert("hello");
}
```

##### 赋值给一个变量

```javascript
var show = function() {
	alert("hello");
}

show();
//注意：使用匿名函数表达式时，函数的调用语句，必须放在函数声明语句之后
```



#### 自执行函数

```javascript
//第一种 尽量少用
var fun = function () {
    ...
}();

//第二种  推荐
(function () {
    //这里是块级作用域
    ...
})();
    
//第三种 ! + - ~ 
!function() {
    ...
}();
```

### 变量的作用域

1. 在js中，变量的定义并**不是以代码块作为作用域**的，而是**以函数作为作用域**。也就是说，如果变量是在某个函数中定义的，那么，它在函数以外的地方是不可见的。但是，如果该变量是定义在if或者for这样的代码块中，它在代码块之外是可见的。
2. 在js中，术语“**全局变量**”指的是定义在所有函数之外的变量（也就是定义在全局代码中的变量），与之相对的是“**局部变量**”，所指的是在某个函数中定义的变量。其中，函数内的代码可以像访问自己的局部变量那样访问全局变量，反之则不行。
3. 下面是具体示例，请注意两点：
   1. 函数f()可以访问变量global
   2. 在函数f()以外，变量local是不存在的。
4. 还有一点要注意：如果我们声明一个变量事没有使用var语句，该变量就会被默认为全局变量。

#### 块级作用域

- 在其它语言中，任何一对花括号中的语句都属于一个块，在这之中定义的所有变量在代码块外都是不可见的
- JavaScript中没有块级作用域

#### 全局变量

定义在script或者不属于某个函数的变量

#### 局部变量

定义在函数内部的变量

#### 其它

函数内部可以访问到该函数所属的外部作用域的变量(作用域链)
不使用var声明的变量是全局变量，不推荐使用。
变量退出作用域之后会销毁，全局变量关闭网页或浏览器才会销毁



### 变量提升

#### 变量提升

定义变量的时候，变量的声明会被提升到作用域的最上面，变量的赋值不会提升。

#### 函数提升

函数声明特征：就是函数声明提升，意思是执行代码之前先读取函数声明。不管函数声明写在前面，还是后面，都会出现函数声明的提升。

```javascript
add(1, 2); //弹窗显示：3

function add(x, y){
	alert(x+y);
}
```

函数声明与函数表达式的区别：函数表达式在使用前必须先赋值

```
add(1, 2); //无弹窗，报错： add is not a function

var add = function(x, y) {
	alert(x+y);
}
```

解析器在向执行环境中加载数据时，解析器会率先读取函数声明，并使其在执行任何代码前可用；至于函数表达式，则必须等到解析器执行到它的所在的的代码行，才会真正的被解析。函数表达式中，创建的函数叫做匿名函数，因为function关键字后面没有标识符。

### 递归

递归函数就是在函数体内调用本函数；

递归函数的使用要注意函数终止条件避免死循环；

 递归返回值

1.递归函数相当于一种循环调用，需要避免死循环，给定一个条件停止调用

2.递归函数的返回值要返回整个函数

### 回调函数

什么是回调函数？
简单理解就是函数做为参数。（这样的......）
复杂理解：回调函数就是一个通过函数调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。



回调函数是一个函数，将会在另一个函数完成执行后立即执行。回调函数是一个作为参数传给另一个 JavaScript 函数的函数。这个回调函数会在传给的函数内部执行。

```
		function title(value){//这是回调函数！！！！
			alert(value);
		}
		function main(title, value){//这个主函数:在参数列表中，title作为一个参数传递进来，也就是上文说的 参数化函数；然后value这个值正是title（）函数中所需要的。
			alert("我是主函数");
			title(value);//结果为：'我是回调函数'。——————然后在这行这个title()，它就是回调函数咯。
		}
		main(title,"我是回调函数");//title参数加上()后，就会变回一个函数，并会被执行一次。
		//PS:看清楚，调用的是main()函数，意味着先执行main()，这时已经执行了主函数，title()被main()在函数体中执行了一次，因此title()是回调函数。

```

将回调函数的参数作为与回调函数同等级的参数进行传递。

回调函数的参数在调用回调函数内部创建。



字面上的理解，回调函数就是传递一个参数化的函数，就是将这个函数作为一个参数传到另一个主函数里面，当那一个主函数执行完之后，再执行传进去的作为参数的函数。走这个过程的参数化的函数 就叫做回调函数。

### 函数是一种数据类型

typeof  f1
函数作为方法的参数
函数作为方法的返回值

# 面向对象

## 对象

### 面向对象

可以创建自定义的类型、很好的支持继承和多态。面向对象的语言c++/java/c#...

- 面向对象的特征：封装、继承、多态
- 万物皆对象：世间的一切事物都可以用对象来描述

### 基于对象

无法创建自定义的类型、不能很好的支持继承和多态。基于对象的语言JavaScript

### JavaScript对象

#### 无序属性的集合

其属性可以包含基本值、对象或函数。对象就是一组没有顺序的值。我们可以把JavaScript中的对象想象成键值对，其中值可以是数据和函数。

#### 对象的行为和特征

- 特征---属性
- 行为---方法

### 创建对象

#### **通过“字面量”创建**

```javascript
var obj = {};//空对象

var obj2 = {
	name: "num1",
	age: 18,
	sex: "男",
	writeHello: function() {
		alert("你好" + this.name);
	}
}
```

#### **通过“object”创建**

```javascript
var obj = new Object();

var obj2 = new Object();
obj2.name = "你好";
obj2.age = 18;
obj2.writeHello = function() {
	alert("Hello");
}
```

#### **通过“构造函数”创建。**

```javascript
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.writeHello = function() {
		document.write("Hello");
	}
}

var obj = new Person("卡卡颂", 16, "女")
```

### this

谁调用this就是谁

```javascript
//  1
function test() {
	console.log(this);
}

test();//window.test();

// 2
p1.sayHi();  //此时的this->p1

// 3
构造函数中的this，始终是new的当前对象
```

### JSON

#### 什么是JSON?

- JavaScript Object Notation（JavaScript对象表示形式）
- JavaScript的子集

#### JSON和对象字面量的区别

JSON的属性必须用双引号引号引起来，对象字面量可以省略

```javascript
//对象字面量
var obj = {
    name: "犯人在跳舞",
    age: 18,
    sayHi: function() {
        alert("hi");
    }
}

//JSON
{
    "name": "犯人在跳舞",
    "age": 18,
    "sayHi": function() {
        alert("hi");
    }
}
```

### 遍历对象的属性

```javascript
var obj = {};

for(var key in obj){
	console.log(key + "===" + obj[key]);
}
```

## 数据类型

### 基本类型

Number、String、Boolean
Undefined、Null

### 引用类型

Object、Array、Date等

### 包装基本类型-引用类型

## 内置对象

### Array

#### 常用方法

```javascript
var arr = [12,15,16,18,9,23,24,29,57,68,84,512];

//尾部添加元素
arr.push(17);

//头部添加元素
arr.unshift(72);

//尾部删除元素
arr.pop();

//头部删除元素
arr.shift();

//数组拼接成字符串
arr.join(",");

//数组倒置
var arr = arr.reverse();

// 截取数组 slice  start-end
var arr2 = ["html","css","javascript","jQuery","Ajax"];
var arr3 = arr2.slice(0,2); //["html","css"]

//数组插入替换删除-splice
var arr4 = arr2.splice(2,0,"hello");//["html","css","hello","javascript","jQuery","Ajax"]

//数组合并-多个数组或元素合并-concat
var arr5 = [12,3,65];
var arr6 = [16,59,89,68];
var arr7 = arr5.concat(arr6);

//从左侧数组查找下标-indexOf
var arr8 = [1,2,3,4,5,6,7,8,9];
var index = arr8.indexOf(8);

//从右侧数组查找下标-lastIndexOf
var arr9 = [1,2,3,4,5,6,7,8,9];
var index2 = arr9.lastIndexOf(8);

//数组排序
var arr10 = arr9.sort();

//检查数组
instanceof

//判断是否是数组
Array.isArray()	//HTML5中新增
```

#### 迭代方法

every()、filter()、forEach()、map()、some()

#### 归并方法

reduce()、reduceRight()

# 事件

## 事件三要素

事件源：

```
//获取事件源
document.getElementById(“box”);
```

事件：

```
//绑定事件
box.onclick = function(){ 程序 };  //onclick 点击事件
```

事件驱动程序：

```
// 事件驱动程序
box.onclick = function(){ 程序 };  //程序 关于DOM的操作
```

## 事件有哪些

![img](file:///C:\Users\admin\AppData\Local\Temp\ksohtml\wps25CC.tmp.jpg)

