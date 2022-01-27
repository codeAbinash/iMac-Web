$(document).ready(function(){


  $("header img").click(function(){
     $("#options").show(200);
     $("#fullscreendiv").show();
  });

  $("#fullscreendiv, #options").click(function(){
     $("#options").hide(200);
     $("#fullscreendiv").hide();
  });
 
  $("#header2 p").click(function(){
     $("#header2 p").css("color",'#aaa');
     this.style.color="var(--main-color)";
     $("#content #dayDiv,#weekDiv,#monthDiv,#yearDiv").hide();
  });
  

  $("#header2 .day").click(function(){
     $("#content #dayDiv").show();
     });
  $("#header2 .week").click(function(){
     $("#content #weekDiv").show();
  });

  $("#header2 .month").click(function(){
     $("#content #monthDiv").show();
  });

  $("#header2 .year").click(function(){
     $("#content #yearDiv").show();
  });

  





$("header h1").click(function(){openFullscreen();});
   
});

function openThemesDiv(){
   $("#themeDiv").animate({
      bottom:'8px',
   },200).show();
}

$("#themeDiv").click(function(){
  $("#themeDiv").animate({
     bottom:'-100vh',
  },200).hide(200);
});



function changeTheme(i){
   document.body.style.setProperty('--main-color',i.background)
   localStorage.mainColorSavings = i.background;
   document.body.style.setProperty('--sub-color',rgbToHex(i.background))
   localStorage.subColorSavings = rgbToHex(i.background);
   localStorage.hrGradColor = i.background;
   document.body.style.setProperty("--hr-grad-color",localStorage.hrGradColor);
   localStorage.vrGradColor = i.background;
   document.body.style.setProperty("--vr-grad-color",localStorage.vrGradColor);
}
function changeThemePar(i){
   document.body.style.setProperty('--main-color',i)
   localStorage.mainColorSavings = i;
   document.body.style.setProperty('--sub-color',i+"22");
   localStorage.subColorSavings = i+"22";
}



if(localStorage.mainColorSavings){}else{localStorage.mainColorSavings = "dodgerblue";}
if(localStorage.subColorSavings){}else{localStorage.subColorSavings="rgba(30, 144, 255,0.15)";}
if(localStorage.hrGradColor){}else{localStorage.hrGradColor ="linear-gradient(to left, dodgerblue, deepskyblue)";}
if(localStorage.vrGradColor){}else{localStorage.vrGradColor = "linear-gradient(to left, dodgerblue, deepskyblue)";}
   document.body.style.setProperty("--main-color",localStorage.mainColorSavings);
   document.body.style.setProperty("--sub-color",localStorage.subColorSavings);
   document.body.style.setProperty("--hr-grad-color",localStorage.hrGradColor);
   document.body.style.setProperty("--vr-grad-color",localStorage.vrGradColor);


function rgbToHex(color) {
    color = ""+ color;
    if (!color || color.indexOf("rgb") < 0) {
        return;
    }
    if (color.charAt(0) == "#") {
        return color;
    }
    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2], 10).toString(16),
        g = parseInt(nums[3], 10).toString(16),
        b = parseInt(nums[4], 10).toString(16);
    return "#"+ (
        (r.length == 1 ? "0"+ r : r) +
        (g.length == 1 ? "0"+ g : g) +
        (b.length == 1 ? "0"+ b : b)
    )+"22";
}





function changeGrad(i,j){
    document.body.style.setProperty("--hr-grad-color","linear-gradient(to right, " + i + "," + j + ")");
    document.body.style.setProperty("--vr-grad-color","linear-gradient(to bottom, " + i + "," + j + ")");
    localStorage.hrGradColor = "linear-gradient(to right, " + i + "," + j + ")";
    localStorage.vrGradColor = "linear-gradient(to bottom, " + i + "," + j + ")";
    changeThemePar(j);
}
