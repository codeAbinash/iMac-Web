if(percentCompleted > 100){
   $("#weekDiv #analysis #grid-container .grid2 h1").text(checkZero(percentCompleted - 100) + "%");
   $("#weekDiv #analysis #grid-container .grid2 p").text(("Extra !"));
}else{
   $("#weekDiv #analysis #grid-container .grid2 h1").text(checkZero(percentCompleted)+ "%");
}
/*
$("#weekDiv #analysis #grid-container .grid4 h6").text(getDateTh(whenStarted.getDate()));
$("#weekDiv #analysis #grid-container .grid4 p:last-child").text(getShortMonth(whenStarted.getMonth()) + " " +whenStarted.getFullYear());

$("#weekDiv #analysis #grid-container .grid5 h6").text(getDateTh(dateTarget.getDate()));
$("#weekDiv #analysis #grid-container .grid5 p:last-child").text(getShortMonth(dateTarget.getMonth()) + " " +dateTarget.getFullYear());

$("#weekDiv #analysis #grid-container .grid6 h6").text(perDay);
//$("#weekDiv #analysis #grid-container .grid6 p:last-child").text(getShortMonth(dateTarget.getMonth()) + " " +dateTarget.getFullYear());
$("#weekDiv #analysis #grid-container .grid7 h6").text(needPerDay);


*/

if(needPerDay < perDay){
     var days = (Math.floor((Number(localStorage.targetSavings)-Number(localStorage.balanceSavings))/(Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1)))) + 1);
     var moreMoney = perDay - targetPerDay;
   $("#weekDiv #analysis #grid-container .grid4 h1").text("Your Saving is going well.");
   $("#weekDiv #analysis #grid-container .grid4 p").html(function(){
       return "Your Saving will be finished <b>" + ((Math.floor((dateTarget.getTime() - whenStarted.getTime())/86400000)) - days) + " </b>days before than your target date. You're saving more <b>" + moreMoney + "</b> of your daily target. Carry on. Good Luck.";
      //return "Will end in <b>" + days + " days</b> instead of <b>" + (Math.floor((dateTarget.getTime() - whenStarted.getTime())/86400000)) +  " days</b>, According to your savings.";
   });
  
}else{
     var days = (Math.floor((Number(localStorage.targetSavings)-Number(localStorage.balanceSavings))/(Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1)))) + 1);
     var lessMoney = Math.abs(perDay - targetPerDay);
     $("#weekDiv #analysis #grid-container .grid4 h1").text("Your Saving is not going well.");
     $("#weekDiv #analysis #grid-container .grid4 p").html(function(){
     return "Your Saving will take more <b>" + Math.abs(((Math.floor((dateTarget.getTime() - whenStarted.getTime())/86400000)) - days)) + " </b>days from your target date. You're saving less <b>" + lessMoney + "</b> than your daily target. Carry on. Good Luck.";
     });
    
}

   var days = (Math.floor((Number(localStorage.targetSavings)-Number(localStorage.balanceSavings))/(Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1)))) + 1);
   var endDate = Math.floor((Number(localStorage.dateTargetSavings) - Number(localStorage.whenStartedSavings)) / 86400000);
  // return "Will end in <b>" + Math.abs(days) + " days</b> instead of <b>" + (Math.floor((dateTarget.getTime() - whenStarted.getTime())/86400000)) +  " days</b>, According to your savings.";

$("#weekDiv #analysis #grid-container .grid5 h1").text(days);
$("#weekDiv #analysis #grid-container .grid3 h1").text(endDate);