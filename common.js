function checkZero(x){
    if(x>=10)
        return x;
    else
        return x+"0";
}

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen){
    elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    }
}
