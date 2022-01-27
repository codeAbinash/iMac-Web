$(document).ready(function () {
    setTime();
});

function setTime(){
    var dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthList=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var now = new Date();
    var hour = now.getHours();
    if(hour>12){
        hour-=12;
    }
    else if(hour==0){
        hour=12;
    }
    time=hour+":"+checkZero(now.getMinutes());
    date=dayList[now.getDay()]+", "+monthList[now.getMonth()]+" "+now.getDate();
    $(".bottom .container .calender p").text(dayList[now.getDay()]);
    $(".bottom .container .calender h1").text(now.getDate());

    $(".main .left .time h1").text(time);
    $(".main .left .time p").text(date);
    setTimeout(setTime,1000);
}