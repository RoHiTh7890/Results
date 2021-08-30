var Data = {'17691A0136': ['8.92', '8.92'],''};
var roll;	
var sem;
function GetRes(){
        roll = document.getElementById("roll").value.toUpperCase();
        sem = document.getElementById("sem").value;
        if(roll.length<10 || roll.length>10)
        {
          var msg = "<span id='error'>INVALID USERNAME</span>"; 
          document.getElementById("result-content").innerHTML = msg; 
          return;
        }
        var points = GetResult(roll);
        if(points!=undefined){
          var per = parseFloat(points[1])*9.5;
          var msg = "<span id='result'>SGPA : "+points[0]+"</span><span id='result'>CGPA : "+points[1]+"</span><span id ='result'>% : "+Math.round(per)+"</span>";
          document.getElementById("result-content").innerHTML = msg;
        }
        else
        {
          var msg = "<span id='error'>SORRY CAN'T FIND YOUR RESULTS</span>"; 
          document.getElementById("result-content").innerHTML = msg;

        }
}
function GetResult(roll) {
  var data1 = Data[roll];
  if(data1==undefined)
  	return undefined;
  console.log(data1)
  return data1;
}


