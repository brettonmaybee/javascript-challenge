// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select("tbody");

console.log(tableData);

tableData.forEach(function(ufoReport){
    console.log(ufoReport)
});

tableData.forEach(function(ufoReport){
   var row =tbody.append("tr");
});

//tableData.forEach(function(ufoReport){
  //  var row =tbody.forEach("tr");
    //Object.defineProperties(ufoReport).forEach(function([key,value]){
    //    console.log(key,value);
    //})
//})