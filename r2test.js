var correctAnswersCount = 0;

function checkAnswer1() {
    var userAnswer = document.getElementById("userAnswer1").value;
    var correctAnswer = "10 5"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result1").innerText = "Correct! Well done!";
        document.getElementById("imageContainer1").style.display = "flex";
        correctAnswersCount++;
    } else {
        document.getElementById("result1").innerText = "Incorrect. Try again.";
        document.getElementById("imageContainer1").style.display = "none";
    }
    checkAllAnswers();
}

function checkAnswer2() {
    var userAnswer = document.getElementById("userAnswer2").value;
    var correctAnswer = "10"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result2").innerText = "Correct! Well done!";
        document.getElementById("imageContainer2").style.display = "flex";
        correctAnswersCount++;
    } else {
        document.getElementById("result2").innerText = "Incorrect. Try again.";
        document.getElementById("imageContainer2").style.display = "none";
    }
    checkAllAnswers();
}

function checkAnswer3() {
    var userAnswer = document.getElementById("userAnswer3").value;
    var correctAnswer = "C"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result3").innerText = "Correct! Well done!";
        document.getElementById("imageContainer3").style.display = "flex";
        correctAnswersCount++;
    } else {
        document.getElementById("result3").innerText = "Incorrect. Try again.";
        document.getElementById("imageContainer3").style.display = "none";
    }
    checkAllAnswers();
}

function checkAnswer4() {
    var userAnswer = document.getElementById("userAnswer4").value;
    var correctAnswer = "PQSFEJDUJPO"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result4").innerText = "Correct! Well done!";
        document.getElementById("imageContainer4").style.display = "flex";
        correctAnswersCount++;
    } else {
        document.getElementById("result4").innerText = "Incorrect. Try again.";
        document.getElementById("imageContainer4").style.display = "none";
    }
}

function checkAnswer5() {
    var userAnswer = document.getElementById("userAnswer5").value;
    var correctAnswer = "GOTO"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result5").innerText = "Correct! Well done!";
    } else {
        document.getElementById("result5").innerText = "Incorrect. Try again.";
    }
}

function proceedToNextRound() {
    // Call checkAnswer5 before proceeding to the next round
    checkAnswer5();
    
    var userAnswer = document.getElementById("userAnswer5").value;
    var correctAnswer = "GOTO"; // Change this to the correct answer

    if (userAnswer === correctAnswer) {
        document.getElementById("result5").innerText = "Correct! Well done!";
        // Redirect to round3.html only if all answers are correct
        if (correctAnswersCount === 4) {
            window.location.href = 'round3.html';
        }
    } else {
        document.getElementById("result5").innerText = "Incorrect. Try again.";
    }
}