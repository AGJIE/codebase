window.onload = prepareLinks;

function prepareLinks() {
    var links = document.getElementsByTagName("a");

    for(var key in links){
        links[key].onclick = function(){
            if(this.getAttribute("class")  == "pop-up"){
                popUp(this.href);
                return false;
            }
        }
    }
}

function popUp(winUrl) {
    window.open(winUrl, "popup", "width=320,height=480");
}