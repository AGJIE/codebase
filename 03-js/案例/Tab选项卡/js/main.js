var divs = document.getElementsByTagName("div");
var as = document.getElementsByTagName("a");

window.onload = function() {
    for(var i=0; i < as.length; i++){
        as[i].index = i;
        as[i].onclick = function() {
            for(var j=0; j < as.length; j++){
                as[j].className = "";
            }
            this.className = "active";
            for(var k=0; k < divs.length; k++){
                divs[k].style.display = "none";
            }
            divs[this.index].style.display = "block";
        }
    }
}