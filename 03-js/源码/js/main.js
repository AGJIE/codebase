//获取id
function getId(str) {
    return document.getElementById(str);
}

//功能：给定元素查找他的第一个元素子节点，并返回
function getFirstElement(ele) {
    var first = ele.parentNode.firstElementChild || ele.parentNode.firstChild;
    return first;
}

//功能：给定元素查找他的最后一个元素子节点，并返回
function getLastElement(ele) {
    var last = ele.parentNode.lastElementChild || ele.parentNode.lastChild;
    return last;
}

//功能：给定元素查找他的下一个元素兄弟节点，并返回
function getNextElement(ele){
    return ele.nextElementSibling || ele.nextSibing;
}

//功能：给定元素查找他的上一个兄弟元素节点，并返回
function getPreElement(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}

//功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
function getElementOfIndex(ele, index){
    return ele.parentNode.children[index];
}

//功能：给定元素查找他的所有兄弟元素，并返回数组
function getAllSiblings(ele) {
    var newArr = [];
    var list = ele.parentNode.children;
    for(var i=0; i < list.length; i++){
        if(list[i] != ele) {
            newArr.push(list[i]);
        }
    }

    return newArr;
}