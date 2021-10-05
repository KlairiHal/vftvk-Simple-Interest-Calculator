function compute() {

    // Load HTML elements and their values into JS variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result");

    // Positive values Validation for principal input
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Calculate interest
    var interest = principal * years * rate / 100;

    // Calculate the year at the end of the contract
    var dateNow = new Date();
    var year = parseInt(dateNow.getFullYear()) + parseInt(years);

    // Here the resulting numbers are inserted in the result element
    result.innerHTML = "If you deposit  <mark>" + principal + "</mark> , </br>" +
        "at an interest rate of <mark>" + rate + "</mark>. </br>" +
        "You will receive an amount of <mark>" + interest + "</mark>, </br>" +
        "in the year <mark>" + year + "</mark>.";
}

// This is a function that updates the interest rate
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + " %";
}