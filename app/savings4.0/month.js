var chats = localStorage.logTextSavings.split("--c&h--");
var addTake = localStorage.logStatusSavings.split("--c&h--");
var dates = localStorage.logDateSavings.split("--c&h--");

var graphSet = 1;
var arrayGroup = ["Starts"];
var total10 = 0;
var totalAdded = 0;
var totalTaken = 0;
$(document).ready(function(){

for(i=chats.length; i>chats.length - 10; i--){
   var moneyVal = parseInt(chats[i -1]);
   arrayGroup.push(moneyVal);
}

var maxVal = arrayGroup[1];
for(i=1;i<arrayGroup.length;i++){
   if(maxVal < arrayGroup[i]){
      maxVal = arrayGroup[i];
   }
}

//alert(maxVal)

for(i=chats.length; i>chats.length - 10; i--){
   var moneyVal = parseInt(chats[i -1]);
   $("#monthDiv #graphDiv #graph #part" + graphSet + "").css("height", (moneyVal/maxVal * 100) + "%");
   $("#monthDiv #graphDiv #dates #part" + graphSet + "").text(dayByMonth(Number(dates[i -1])));
   
   
   if(addTake[i - 1] == "take"){
         $("#monthDiv #graphDiv #graph #part" + graphSet + "").css("background","red");
         total10-=moneyVal;
         totalTaken+=moneyVal;

   }else{
         total10+=moneyVal;
         totalAdded+=moneyVal
   }
   graphSet++;
}


$("#monthDiv #graphDiv #heights").text(maxVal);
$("#monthDiv #balancediv h1").text(total10);
$("#monthDiv #calculationDiv #left h1").text(totalAdded);
$("#monthDiv #calculationDiv #right h1").text(totalTaken);


});

function dayByMonth(i){
   var date = new Date(i)
   return date.getDate() + "/" + date.getMonth();
}
