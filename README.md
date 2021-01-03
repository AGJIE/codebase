# 语言基础

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

##### 函数表达式自执行

```javascript
//第一种
var fun = function () {
    ...
}();

//第二种
(function () {
    ...
})();
```

#### 工厂模式

```javascript
function createObject(name, age, sex) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.getHello = function () {
        console.log("你好");
    }
    return obj;
}

var person1 = createObject();
```

把实现同一件事情的相同的代码放到一个函数中，以后如果再想实现这个功能，不需要从新的编写这些代码来了，只需要执行当前的函数即可-->"函数的封装"-->"低耦合高内聚":减少页面中的冗余代码，提高代码的重复利用率

即：把实现同一事情的相同代码，放到一个函数中，以后如果再想实现这个功能，就不需要重新编写这些代码了，只要执行当前的函数即可，

这就是函数的封装，体现了高内聚、低耦合的思想：减少页面的中的冗余代码，提高代码的重复利用率：

#### 构造函数模式

```javascript
function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayName = function() {
        alert(this.name)
    }
};

var person1 = new Person("Greg", 18, "男");
```

#### 原型模式

```javascript
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
var person2 = new Person();
alert(person1.sayName == person1.sayName); //true
```

