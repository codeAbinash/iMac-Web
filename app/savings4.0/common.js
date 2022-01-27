function checkZero(i){
   if(i < 10 && i>0){
     return "0" + i;
   }
   else{
     return i;
   }
}
function MStoISO(i){
   var date = new Date(Number(i));
   var year = date.getFullYear();
   var month = checkZero(date.getMonth()+ 1);
   var day = checkZero(date.getDate());
   var ISOdate = year + "-" + month + "-" + day;
   return String(ISOdate);
}

function ISOtoMS(i){
   var array = i.split("-");
   var date= new Date(array[0] + "-" + array[1] -1 + "-" + array[2] )
   alert(date);
}

function getPresentDate(){
   var now = new Date();
   return now.getTime();
   //RETURNS DATE IN MILLISECONDS
}

function notify(i){
   $("#notificationsDiv").text(i);
   var j = i.length * 150;
   $("#notificationsDiv").fadeIn(400);
   setTimeout(function(){$("#notificationsDiv").fadeOut(400);},j);
}
function notify2(i){
   $("#notificationsDiv2").text(i);
   var j = i.length * 500;
   $("#notificationsDiv2").fadeIn(400);
   setTimeout(function(){$("#notificationsDiv2").fadeOut(400);},j);
}

function getShortMonth(i){
   var monthList = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
   return monthList[i];
}

function getFullMonth(i){
   var monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   return monthList[i];
}

function getNotificationDateTime(i){
    var date = new Date(Number(i));
    var year = date.getFullYear();
    var month = checkZero(date.getMonth()+ 1);
    var day = checkZero(date.getDate());
    var hours = date.getHours();
    var ap;
    if(hours > 12){
       hours = checkZero(hours - 12);
       ap = "PM";
    }else{
      ap = "AM"
    }
    if(hours == 0){
       hours = 12;
    }
    var minutes = checkZero(date.getMinutes());
    var seconds = checkZero(date.getSeconds());
    var ISOdate = hours + ":" + minutes + ":" + seconds + " " + ap + " " + day+ "/" + month + "/" + year;
    return String(ISOdate);
}

function getShortDate(i){
   var date = new Date(i);
   return checkZero(date.getDate()) + " " + getShortMonth(date.getMonth()) + " " + date.getFullYear();
}
//alert(getNotificationDateTime(73748839374755));
function openFullscreen(){var doc = document.documentElement;if(doc.requestFullscreen){doc.requestFullscreen();}}


function getDateTh(i){
   var rtn;
   if (i === 1) {
       rtn = "st";
   } else if (i === 2) {
       rtn = "nd";
   } else if(i === 3){
       rtn = "rd";
   } else {
       rtn = "th";
   }
   return i + rtn;
}

function getTimeAP(i){
    var date = new Date(Number(i));
    var hours = date.getHours();
    var ap;
    if(hours > 12){
       hours = checkZero(hours - 12);
       ap = "PM";
    }else{
      ap = "AM"
    }
    if(hours == 0){
       hours = 12;
    }
    var minutes = checkZero(date.getMinutes());
    var seconds = checkZero(date.getSeconds());
    var ISOdate = hours + ":" + minutes + ":" + seconds + " " + ap;
    return ISOdate;
}

var percentCompleted = Math.floor(localStorage.balanceSavings/localStorage.targetSavings*100);
var perDay = Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1));
var need = checkZero(Math.abs((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings))));
var needPerDay = checkZero(Math.floor((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings))/((Number(localStorage.dateTargetSavings) - getPresentDate()) / 86400000) + 1));
var dateTarget = new Date(Number(localStorage.dateTargetSavings));
var daysToEnd = Math.abs((Math.floor((Number(localStorage.targetSavings)-Number(localStorage.balanceSavings))/(Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1)))) + 1));
var endDate = new Date((getPresentDate() + daysToEnd*86400000));
var targetPerDay = Math.floor(Number(localStorage.targetSavings)/((Number(localStorage.dateTargetSavings) - Number(localStorage.whenStartedSavings))/86400000)) + 1;
var whenStarted = new Date(Number(localStorage.whenStartedSavings));