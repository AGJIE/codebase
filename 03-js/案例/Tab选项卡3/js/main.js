var list = document.getElementsByTagName("a");
var divs = document.querySelectorAll(".content div")

window.onload = function() {
    for(var i = 0; i < list.length; i++) {
        list[i].index = i;
        list[i].onclick = function() {
            for(var j = 0; j < list.length; j++){
                list[j].className = '';
            }
            this.className = "active";
            for(var k = 0; k < divs.length; k++) {
                divs[k].style.display = "none";
            }
            divs[this.index].style.display = "block";
        }
    }
}