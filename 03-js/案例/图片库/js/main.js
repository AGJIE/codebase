window.onload = addLoadEvent;

addLoadEvent(prepareGallery);

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload != "function"){
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function prepareGallery(){
    //检查点
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var imagegallery = document.getElementById("imagegallery");
    var links = imagegallery.getElementsByTagName("a");

    for(var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}

function showPic(whichpic) {
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");

    if(!placeholder) {
        return false;
    }

    var source = whichpic.getAttribute("href");
    placeholder.setAttribute("src", source);
    
    if(description) {
        var text = whichpic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }
    return true;
}
