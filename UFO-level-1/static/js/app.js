// from data.js
var tableData = data;

var tbody =d3.select("tbody");

console.log(tableData);

var button = d3.select("#filter-btn");

var date = d3.select("#datetime").property("value");


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


