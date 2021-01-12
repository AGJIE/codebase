# JavaScript

### ECMAScript

描述了JS的语法和基本对象。

### DOM

处理网页内容的方法和接口

### BOM

与浏览器交互的方法和接口

# ECMAScript

## 执行顺序

检查装载：会先检测代码的语法错误，进行变量、函数的声明

执行阶段：变量的赋值、函数的调用等，都属于执行阶段。

## 声明语句



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

提示栏

```
1. 函数声明与函数表达式
2. 递归

```

摘要栏

```
函数：函数就是可以重复执行的代码块
```

笔记栏

### 函数定义

```javascript
//函数声明
function add(num1, num2) {
	return num1+num2;//返回两个值之和
}

//计算阶乘-递归函数
function factorial(x) {
    if(x <= 1) {
        return 1;
    }
    return x * factorial(x-1);
}

//函数表达式
//第一种  把函数表达式赋值给变量
var add = function(num1, num2) {
	return num1+num2;
}

// 函数表达式可以包含名称。这递归很有用
var total = function sum(num1) {
    return num1 * num1;
}

// 函数表达式也可以作为参数传递给其他参赛
array.sort(function (a, b) {
    return a-b;
})

// 函数表达式有时定义后立即使用
var tensquared = (function (a, b) {
    return a + b;
}(12, 34));//46

//函数表达式适合用来定义只会用到一次的函数
//函数命名通常以动词或以动词为前缀的词组，多个单纯遵循驼峰命名法

//函数声明与函数表达式区别
//函数声明语句可以被在它定义之前出现的代码所调用
//函数表达式，调用函数前，要先引用它，而使用一个函数表达式定义的函数之前，必须要先赋值给一个变量，变量的声明提前，但是其赋值是不会提前的，所以，以表达式方式定义的函数在定义之前无法调用。


//大多数函数包含一条return语句。return语句导致函数停止执行，并返回它的表达式（如果有的话）的值给调用者。若没有，默认返回undefined

//函数声明语句可以出现全局代码里，或者内嵌在其他函数中，但不能出现在循环、条件判断、try/cache/finally以及with语句中

//函数表达式可以出现在JavaScript代码的任何地方
```

#### 嵌套函数

```javascript
function total () {
    function sum(a){
        return a * a
    }
    
    return Math.sqrt(sum(10) + sum(15));
}
//在JavaScript里，函数可以嵌套在其他函数里。嵌套函数其变量作用域规则：它们可以访问嵌套它们（或多重嵌套）的函数的参数和变量。
```

### 函数调用

```javascript
//有四种方式调用JavaScript函数
/*
	作为函数
	作为方法
	作为构造函数
	通过它们的call()和apply方法间接调用
*/

// 函数调用
function sum(num1, num2) {
    return num1 * num2;
}
sum(16, 68);

// 方法调用
var obj = {
    name: "卡坦岛",
    writeHello: function() {
        console.log("hello world");
    }
}
obj.writeHello();

/*
	函数调用与方法调用
	上下文
		函数调用，全局对象成为上下文，严格模式下this为undefined，函数调用的函数通常不使用this，可以用来判断当前是否是严格模式
		方法调用，对象成为上下文
*/
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

## 内置对象

### 正则表达式-RegExp

#### 创建RegExp对象

##### 通过“字面量”创建

```javascript
var reg = /s$/;
```

##### 通过“RegExp”创建

```javascript
var reg = new RegExp("s$");
```

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

# DOM

DOM   (文档对象模型)

- 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。
- 目的其实就是为了能让js操作html元素而制定的一个规范。

节点：

- 文档节点（document）
- 元素节点
- 文本节点
- 属性节点

## 获取节点

提示栏

```
1. 通过id、标签、class、css选择器获取节点？
2. node对象与Element节点的属性、父子节点、兄弟节点、子节点第一个节点、最后一个节点、节点类型、节点名称、节点值
3. 
```

摘要栏

```
1.节点的获取不单是在document节点调用方法，也可以在其他节点上调用
2.节点类型可用于判断当前节点是属于什么节点?文本？标签？属性？
3.node对象与ELement节点属性的区别？
	Element节点属性过滤文本节点与注释节点
```

笔记栏

```javascript
//通过id
document.getElementById("demo");
//通过标签名
document.getElementsByTagName("div")
//通过class
document.getElementsByClassName("a"); //通过类名查找 HTML 元素在 IE 5,6,7,8 中无效
//通过name
document.getElementsByName("username");
//通过CSS选择器选取元素
document.querySelectOr("ul li"); //返回与该模式匹配的第一个元素
document.querySelectAll("div ul");//返回与该模式匹配的所有元素

/*
	注意：前缀为document，意思是在document节点下调用这些方法，当然也可以在其他的元素节点下调用
*/
```

## Node对象

Document文档对象、Element对象、文档中表示文本的Text对象、都是Node对象

笔记栏

```javascript
//父节点-parentNode
var div1 = document.getElementsByTagName("div")[0];
var parent = div1.parentNode;

//子节点-childNodes
var listNode = div1.childNodes;

//子节点的第一个-firstChild
var firstChild = div1.firshChild;

//子节点的最后一个-lastChild
var lastChild = div1.lastChild;

//兄弟节点-该节点的上一个节点-nextSibling
var next = div1.nextSibling;

//兄弟节点-该节点的下一个节点-previoursSibling
var previours = div1.previoursSibling;

//节点类型-nodeType
var node = div1.nodeType;

//节点值-nodeValue
var node = div1.nodeValue;

//节点名称-nodeName
var name = div1.nodeName;
```

## Element对象

它将文档看做是Element对象树，忽略部分文档：Text和Comment节点

笔记栏

```javascript
//子节点-children
//非标准属性，只包含Element对象
var div1 = document.getElementById("div1");
var list = div1.children;

//子节点的第一个-firstElementChild
var first = div1.firstElementChild; //只代表子Element;
//子节点的最后一个-lastElementChild.
var last = div1.lastElementChild;//只代表子Element;

//兄弟节点-该节点的上一个节点-nextElementSibling
var next = div1.nextElementSibling; //只代表兄弟Element;
//兄弟节点-该节点的下一个节点-previoursElementSibling
var pre = div1.previoursElementSibling; //只代表兄弟Element;
```

## 属性

### HTML属性作为Element的属性

表示HTML文档元素的HTMLElement对象定义了读/写属性，它们映射了元素的HTML属性。

```javascript
//如查询一张图片的URL
var img = document.getElementById("image");
var imgUrl = img.src; //src属性是图片的url

// 同样可以为img元素设置属性
img.src = "https://wwww.xxx.com";
```

- 有些HTML属性的值通常是字符串。当属性为布尔值或数值，属性也是布尔值或数值，而不是字符串
- 任何HTML元素的style属性值是CSSStyleDeclaration对象，而不是字符串

注意：这个基于属性的API用来获取和设置属性值，但没有定义任何从元素中删除属性的方法。奇怪的是，delelte操作符也无法完成此目的。

### 获取和设置非标准的HTML属性

getAttribute()和setAttribute()方法，用来查询和设置非标准的HTML属性，也可用来查询和设置XML文档中元素上的属性

```javascript
var image = document.image[0];
var width = parseInt(image.getAttribute("src"));
image.setAttribute("class", "imgAll");s
```

与基于属性的API区别：

- 属性值都被看做是字符串。getAttribute()不返回数值、布尔值或对象
- 方法使用标准属性名，名称为JavaScript保留字时也不例外。对于HTML元素来说。属性名不区分大小写

### 检测命名属性是否存在-hasAttribute()

```javascript
var img = document.image[0];
var bool = img.hasAttribute("src");
```

### 完全删除属性-removeAttribute()

```javascript
var img = document.image[0];
var bool = img.removeAttribute("src");
```

### 数据集属性

在HTML5文档中，任意以**”data-“** 为前缀的小写的属性名字都是合法的。这些**“数据集属性”**将不会对其元素的表现产生影响，它们定义了一种标准的、附加额外数据的方法，并不是在文档合法性上做出让步。

HTML5还在Element对象上定义了dataset属性。指代一个对象，它的各个属性对应于去掉前缀的**data-属性**。因此**dataset.x**应该保存**data-x**属性的值。

带连字符的属性对应于驼峰命名法属性名：**data-jquery-test**属性就变成**dataset.jqueryTest**属性。

### 作为Attr节点的属性

```javascript
document.body.attributes[0];//获得所有属性节点，返回一个数组（伪数组）
```

针对非Element对象的任何节点，该属性为null，对于Element对象，attributes属性是只读的类数组对象，它代表元素的所有属性，可以用数字索引访问或属性名索引

当索引attributes对象时得到的值是Attr对象。Attr的name和value属性返回该属性的名字和值

## 元素的内容

### 作为HTML的元素内容

- 从对象的起始位置到终止位置的全部内容,包括Html标签。
- innerHTML 是所有浏览器都支持的。innerHTML是符合W3C标准的属性
- outerHTML指的是除了包含innerHTML的全部内容外, 还包含对象标签本身。

```javascript
/*
	<div id="div1">
		<p>hello word</p>
	</div>
*/

var div1 = document.getElementById("div1");
console.log(div1.innerHTML); //<p>hello word</p>
//用"+="操作符重复追加一小段文本通常效率低下，因为既要序列化又要解析
```

### 作为纯文本的元素内容

- 有时需要查询纯文本形式的元素内容，或者在文档中插入纯文本（不必转义HTML标记中使用的尖括号和&符号）
- textContent属性在除了IE的所有当前的浏览器中都支持

```javascript
div1.textContent = "hello world";
```

### 作为Text节点的元素内容

- 从起始位置到终止位置的内容,但它去除Html标签。
- innerText 是IE浏览器和chrome 浏览器支持的，Firefox浏览器不支持。innerText只适用于IE浏览器（现在也适应chrome浏览器）

```javascript
console.log(div1.innerText);//hello word
```

## 创建、插入和删除节点

- Document类型定义了创建Element和Text对象的方法
- Node类型定义了在节点数中插入、删除和替换的方法

### 创建节点

#### Element节点

```javascript
var p = document.createElement("p");
```

#### Text节点

```javascript
var text = document.createTextNode("text node content");
```

#### 文档片段

```javascript
var content = document.createDocumentFragment();
```

### 插入节点

#### appendChild

向节点添加最后一个子节点。也可以使用此方法从一个元素向另一个元素移动元素。

```javascript
var div1 = document.getElementById("div1");
var p = document.createElement("p");

div1.appendChild(p); //这两种方法都可以实现
div1.insertBefore(p, null);
```

#### insertBefore

在已有的字节点前中插入一个新的子节点。

```javascript
var div1 = document.getElementByTagName("div")[0];
var last = div1.lastChild;
var p = document.createElement("p");
p.innerHTML = "this is p";

div1.insertBefore(p, last);
```

### 删除和替换节点

#### removeChild

removeChild()方法是从文档树中删除一个节点。注意：该方法不是在待删除的节点上调用，而是在其父节点调用

```javascript
/*
	<div>
		<p>hello world</p>
    </div>
*/
var p = document.getElementByTagName("p")[0];
p.parentNode.removeChild(p);
```

#### replaceChild

replaceChild()方法删除一个子节点并用一个新的节点取而代之。

```javascript
var p = document.getElementByTagName("p")[0];
var h1 = document.createElement("h1");
h1.innerHTML = "hello";

p.parentNode.replaceChild(h1, p);
```

另外一种用法是： 用一个新的元素替换节点，并使该节点成为新元素的子节点

# BOM

## 计时器

### setTimeout()

用来实现一个函数在指定的毫秒数之后运行。



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

| 事件名      | 说明                               |
| ----------- | ---------------------------------- |
| onclick     | 鼠标单击                           |
| ondblclcik  | 鼠标双击                           |
| onkeyup     | 按下并释放键盘上的一个键时触发     |
| onchange    | 文本内容或下拉菜单中的选项发生改变 |
| onfocus     | 获得焦点，表示文本框等获得鼠标光标 |
| onblur      | 失去焦点，表示文本框等失去鼠标光标 |
| onmouseover | 鼠标悬停，即鼠标停留在图片等的上方 |
| onmouseout  | 鼠标移出，即离开图片等所在的区域   |
| onload      | 网页文档加载事件                   |
| onunload    | 关闭网页时                         |
| onsubmit    | 表单提交事件                       |
| onreset     | 重置表单时                         |

## 事件类型

- 3级DOM事件（DOM Level 3 Events）规范
-  HTML5规范及相关衍生规范的大量新API定义了新事件，比如：历史管理、拖放、跨文档通信以及视频和音频的播放。
- 基于触摸和支持JavaScript的移动设备的出现

### 传统事件类型

1. 表单事件
2. window事件
3. 鼠标事件
4. 键盘事件

### DOM事件



# 收集箱

火花线

生成目录表



笔记栏

提示栏

摘要栏