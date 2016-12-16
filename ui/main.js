// counter code
var button = document.getElementById('counter');

button.onclick = function () {

// Create a request object
    var request = new XMLHttpRequest();

// capture the response and store in it variable
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status==200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not yet done
    };

// Make the request
   request.open('GET', 'http://sivamuniappan.imad.hasura-app.io/counter' , true );
   request.send(null);
    


};
