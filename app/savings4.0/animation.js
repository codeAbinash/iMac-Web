function animationLeft(){
setTransitions();
document.body.style.transform="translateX(-100vw)";
}
function animationRight(){
setTransitions();
document.body.style.transform="translateX(100vw)";
}
function setTransitions(){
  document.body.style.transitionProperty="transform";
  document.body.style.transitionDuration="0.15s"
  document.body.style.transitionTimingFunction="linear";
}
function openPage(pagelink){
  animationLeft();
  setTimeout(function(){
  window.location.assign(pagelink)
  },150);
}
function goBack(){
  animationRight();
  setTimeout(function(){
  window.history.back();
  },150);
}
function openFullScreen(){
    var doc = document.documentElement;
    if(doc.requestFullscreen){
        doc.requestFullscreen();
    }
}