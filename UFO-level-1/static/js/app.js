// from data.js
var tableData = data;
var tbody =d3.select("tbody");
//console.log(tableData);
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

var searchDate=
inputField.on("change", function() {
  var filterDate = d3.event.target.value;
  //button.on("click", function() {  
  //});
  console.log(filterDate);
});



tableData.forEach((ufoReport)=>{
  //console.log(ufoReport)
  var row =tbody.append("tr");
  Object.entries(ufoReport).forEach(([key,value])=>{
    //console.log(key,value);
    var cell= row.append("td");
    cell.text(value);
  });
})

// var button = d3.select("#filter-btn");
// var inputField = d3.select("#input-field");

// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });

// button.on("click", function() {
//   console.log(inputField);
//   //console.log(d3.event.target);
// })});

