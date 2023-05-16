
document.addEventListener('DOMContentLoaded', function() {

    // A little help from https://stackoverflow.com/questions/9439725/how-to-detect-if-browser-window-is-scrolled-to-bottom
    const scream = document.querySelector(".screaming")
    const place = document.querySelector("#gohere")
    // Detect when the user scrolls
    window.onscroll = function(e) {
        // //document.querySelector(".screaming").innerHTML = document.querySelector(".screaming").innerHTML + "AAAAAAAAAAAA";
        // scream.innerHTML += "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        console.log(document.documentElement.scrollTop)
        // Add 6 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA with the right format
        for (let i = 0; i < 6; i++){
            const doc = document.createElement('h1')
            doc.innerHTML = 'AAAAAAA';
            doc.setAttribute('class', 'text-center screaming');
            place.appendChild(doc);
        }
    };
});
