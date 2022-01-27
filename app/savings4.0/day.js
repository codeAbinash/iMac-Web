//SET THE VALUES
/*var percentCompleted = Math.floor(localStorage.balanceSavings/localStorage.targetSavings*100);
var perDay = Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1));
var need = checkZero(Math.abs((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings))));
var needPerDay = checkZero(Math.floor((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings))/((Number(localStorage.dateTargetSavings) - getPresentDate()) / 86400000) + 1));
var dateTarget = new Date(Number(localStorage.dateTargetSavings));
var daysToEnd = (Math.floor((Number(localStorage.targetSavings)-Number(localStorage.balanceSavings))/(Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1)))) + 1)
var endDate = new Date((getPresentDate() + daysToEnd*86400000));
var targetPerDay = Math.floor(Number(localStorage.targetSavings)/((Number(localStorage.dateTargetSavings) - Number(localStorage.whenStartedSavings))/86400000)) + 1;
var whenStarted = new Date(Number(localStorage.whenStartedSavings));
*/
$(document).ready(function(){
$("#dayDiv #reason").text(localStorage.reasonSavings);
$("#dayDiv #balancediv h1").text(localStorage.balanceSavings);
$("#dayDiv #balancediv #target").text("Target " + localStorage.targetSavings);
///MONEY
if(percentCompleted > 100){
   $("#dayDiv #completed").text(checkZero("Completed! " + (percentCompleted - 100) + "% Extra"));
   $("#dayDiv #sliderContainer #slider").css("width","100%");
   }else{
   $("#dayDiv #completed").text(percentCompleted + "% Completed");
   $("#dayDiv #sliderContainer #slider").css("width",percentCompleted + "%")
}
//$("#dayDiv #boxDiv #bx4 h1").html("21<span style='font-size:0.4em;'> sep</span>");
if((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings)) < 0){
   $("#dayDiv #needed").text("Extra " +  checkZero(Math.abs((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings)))));
}else{
   $("#dayDiv #needed").text("Need " +  need);
}
if(Number(localStorage.balanceSavings)<0){
   $("#dayDiv #balancediv h1").css("color","red");
   $("#dayDiv #needed").css("color","red");
   $("#dayDiv #completed").css("color","red")
}
///////////////////
//DATE
/*
$("#dayDiv #startAndEnd").html(function(){
var whndate = new Date(Number(localStorage.whenStartedSavings));
var trgtdate = new Date(Number(localStorage.dateTargetSavings));
return 'Started on <b>' + getDateTh(whndate.getDate()) + ' ' +  getShortMonth(whndate.getMonth()) + ' ' + whndate.getFullYear() + '</b>. Ends on <b>' + getDateTh(trgtdate.getDate())+ ' ' +  getShortMonth(trgtdate.getMonth()) + ' ' + trgtdate.getFullYear() + '</b>. (<b>' + (Math.floor((trgtdate.getTime() - whndate.getTime())/86400000)) + '</b>) days.';
});
*/
$("#dayDiv #extraNoti").html(function(){
   var days = (Math.floor((Number(localStorage.targetSavings)-Number(localStorage.balanceSavings))/(Math.floor(Number(localStorage.balanceSavings)/(Math.floor(((getPresentDate() - Number(localStorage.whenStartedSavings))/86400000))+1)))) + 1);
   var endDate = new Date((getPresentDate() + days*86400000));
   endDate = getShortDate(endDate);
   return "Will end in <b>" + Math.abs(days) + " days</b> instead of <b>" + (Math.floor((dateTarget.getTime() - whenStarted.getTime())/86400000)) +  " days</b>, According to your savings.";
});

/////////////////////////////////
///BOXES
$("#dayDiv #boxDiv #bx4 h1").text(checkZero(perDay));

/*$("#dayDiv #boxDiv #bx1 p:last-child").text(function(){
  return 'Need ' + checkZero(Math.floor((Number(localStorage.targetSavings) - Number(localStorage.balanceSavings))/((Number(localStorage.dateTargetSavings) - getPresentDate()) / 86400000) + 1)) + ' /d';
});
*/

$("#dayDiv #boxDiv #bx2 h1").text(checkZero(targetPerDay));

$("#dayDiv #boxDiv #bx3 h1").text(checkZero(dateTarget.getDate()));
$("#dayDiv #boxDiv #bx3 p:last-child").text(getFullMonth(dateTarget.getMonth()) + " " +dateTarget.getFullYear());

$("#dayDiv #boxDiv #bx5 h1").text(needPerDay);

$("#dayDiv #boxDiv #bx1 h1").text(checkZero(whenStarted.getDate()));
$("#dayDiv #boxDiv #bx1 p:last-child").text(getFullMonth(whenStarted.getMonth()) + " " +whenStarted.getFullYear());



var endDate = new Date((getPresentDate() + daysToEnd*86400000));
$("#dayDiv #boxDiv #bx6 h1").text(checkZero(endDate.getDate()));
$("#dayDiv #boxDiv #bx6 p:last-child").text(getFullMonth(endDate.getMonth()) + " " +endDate.getFullYear());



});
/////////////////////////////////