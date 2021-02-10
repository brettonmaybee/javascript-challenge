// from data.js
var tableData = data;

var tbody =d3.select("tbody");

console.log(tableData);

var button = d3.select("#filter-btn");

var date = d3.select("#datetime").property("value");


// inputField.on("change", function() {
//   var filterDate = d3.event.target.value;
//    //button.on("click", function() {  
//    //});
//   console.log(filterDate);
// });

//console.log(searchDate);
// Create event handlers 

// inputField.on("submit",runEnter);

// // Complete the event handler function for the form

// Prevent the page from refreshing
//functiond3.event.preventDefault();


function runEnter() {

   // Prevent the page from refreshing
   d3.event.preventDefault();
  
   // Select the input element and get the raw HTML node
   var inputValue = d3.select("#datetime").property("value");
   var filteredData=tableData;

  console.log(inputValue);
  
  if (inputValue) {
    filteredData = filteredData.filter(ufoReport => ufoReport.datetime === inputValue);
  }
  console.log(filteredData);
  buildTable(filteredData);
}

function buildTable(data) {
  
  tbody.html("");
  
  data.forEach((ufoReport)=>{
  //console.log(ufoReport)
    var row =tbody.append("tr");
  
    Object.values(ufoReport).forEach((value)=>{
    //console.log(key,value);
      var cell= row.append("td");
        cell.text(value);
      }
    );
  });
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", runEnter);

buildTable(tableData);

// var button = d3.select("#filter-btn");
// var inputField = d3.select("#input-field");

// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });

// button.on("click", function() {
//   console.log(inputField);
//   //console.log(d3.event.target);
// })


