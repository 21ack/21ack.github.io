document.addEventListener('DOMContentLoaded', function() {
    let response = document.querySelector('#respond_secret');
    document.querySelector("#sub_secret").addEventListener('click', function(e) {
        var test = document.querySelector('#text_secret').value
        // If the user input password, redirect to secret.html, else do nothing
        if (test == "All Hail Christopher Robin"){
            // Get the location the url for the page
            var address = window.location.href;
            // Replace index with secret page
            var address2 = address.replace("index.html", "secret.html");
            // Bring them to the secret page
            // Source: https://www.w3schools.com/jsref/met_win_open.asp
            window.open(address2)
            response.innerHTML = "Maybe it does something";
        }
        else{
            // Edit response
            response.innerHTML = "I'm telling you it does nothing";
        }
        e.preventDefault();
        return false;
    });

});
