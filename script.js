document.addEventListener("DOMContentLoaded", function() {
    // Fetch the dataset using Fetch API
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
        .then(response => response.json())
        .then(data => {
            // Process data and create visualization
            createScatterPlot(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to bar char
    function barChart(data) {
        // Add your D3.js code here to create the scatter plot
    }
});
