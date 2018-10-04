// from data.js
console.log("this has loaded!")

var tableData = data;

// Select table  
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow)=> {
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((val)=>{
            var cell = row.append("td");
                cell.text(val);

        });
    });

};



function handleClick() {

    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    console.log(date)
    var filteredData = data
    // TableData.filter(row=>row.datetime === date);

    if (date){

        filteredData = filteredData.filter(record => record.datetime === date);
    }
    console.log(filteredData);
    buildTable(filteredData);

}


d3.select("#filter-btn").on("click", handleClick);

buildTable(data);




// // Get references to the tbody element, input field and button
// var $tbody = document.querySelector("tbody");
// var $dateInput = document.querySelector("#datetime");
// var $stateInput = document.querySelector("#state");
// var $searchBtn = document.querySelector("#search");
// var $cityInput = document.querySelector("#city");
// var $countryInput = document.querySelector("#country");
// var $shapeInput = document.querySelector("#shape");




// // YOUR CODE HERE!
// // Select the submit button
// var submit = d3.select("#submit");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#patient-form-input");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var date = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var city = document.querySelector(datetime);
//   var state = math.median(ages);
//   var country = math.mode(ages);
//   var shape = math.var(ages);
//   var duration = math.std(ages);

//   // Finally, add the summary stats to the `ul` tag
//   d3.select(".summary")
//     .append("li").text(`Mean: ${mean}`)
//     .append("li").text(`Median: ${median}`)
//     .append("li").text(`Mode: ${mode}`)
//     .append("li").text(`Variance: ${variance}`)
//     .append("li").text(`Standard Deviation: ${standardDeviation}`);
// });
