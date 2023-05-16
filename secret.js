
document.addEventListener('DOMContentLoaded', function() {

    // Code for secret page

    // Close eyes when clicked
    document.querySelector('#eyesimg').addEventListener('click', function(e) {
        document.querySelector('#eyesimg').src = "media/ICU2.png";
        // Play funny sound - https://stackoverflow.com/questions/9419263/how-to-play-audio
        new Audio('media/Hurt.mp3').play();
        e.preventDefault();
    });
    // Open when unhovered
    document.querySelector('#eyesimg').addEventListener('mouseleave', function(e) {
        document.querySelector('#eyesimg').src = "media/ICU0.png";
        e.preventDefault();
    });

});
