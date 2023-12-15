// scripts.js

function showImage(src, caption) {
    document.getElementById('popupImage').src = src;
    document.getElementById('popupCaption').innerText = caption;
    document.getElementById('imagePopup').style.display = 'block';
}

function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}

/*function checkAnswer() {
    var userAnswer = document.getElementById("userAnswer1").value;
    var correctAnswer = "ABCD"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Correct! Well done!";
        document.getElementById("imageContainer1").style.display = "flex";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("imageContainer1").style.display = "none";
    }
}*/

function checkAnswer() {
    var userAnswer = document.getElementById("userAnswer").value;
    var correctAnswer = "ABCD"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Correct! Well done!";

        // Change the background image
        document.body.style.backgroundImage = "url('r1wall.jpg')";
        document.getElementById("proceedMessage").innerText = "Congratulations! Proceed to the next round.";
        document.getElementById("proceedButton").style.display = "block";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";

        // Reset the background image to the default
        document.body.style.backgroundImage = "url('round1 wallpaper.jpg')";
    }
}

function proceedToNextRound() {
    // Redirect to round2.html
    window.location.href = "round2.html";
}

// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Existing code...

    // Close the image popup when clicking outside the image
    document.getElementById('imagePopup').addEventListener('click', function (event) {
        if (event.target === this) {
            closeImagePopup();
        }
    });
});
