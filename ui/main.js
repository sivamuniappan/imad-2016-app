// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {

// make the request to the counter end point

// capture the response and store in it variable

// Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();


};
