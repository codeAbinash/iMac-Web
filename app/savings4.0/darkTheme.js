if(localStorage.darkModeSavings){
   document.body.style.setProperty('--main-theme-color','black');
   document.body.style.setProperty('--sub-theme-color','#181818');
   document.body.style.setProperty('--main-text-color', 'white');
   document.body.style.setProperty('--dark-icons', 'invert(100%)');
   document.body.style.setProperty('--box-shadow','');
   document.body.style.setProperty('--sub-theme-color2','#333');
   document.body.style.setProperty('--box-color','#222');
}else{
   document.body.style.setProperty('--main-theme-color','white');
   document.body.style.setProperty('--sub-theme-color','white');
   document.body.style.setProperty('--main-text-color', 'black');
   document.body.style.setProperty('--dark-icons', 'invert(0%)');
   document.body.style.setProperty('--box-shadow','1px 1px 5px 0px rgba(0,0,0,0.1)');
   document.body.style.setProperty('--sub-theme-color2','#eee');
   document.body.style.setProperty('--box-color','#eee');
}