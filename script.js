
function toggleAnswer(button) {
    const questionItem = button.closest('.question-item');
    const answerContainers = document.querySelectorAll('.answer-container');

    // Close all other answers
    answerContainers.forEach(container => {
        if (container !== questionItem.querySelector('.answer-container')) {
            container.parentElement.classList.remove('active');
        }
    });

    // Toggle the current answer
    questionItem.classList.toggle('active');
}

function checkAnswer(button, correctAnswer) {
    const userAnswer = button.previousElementSibling.value.trim().toLowerCase();
    const correctAnswerText = correctAnswer.toLowerCase();
    const feedback = button.nextElementSibling;
    const answerContainer = button.closest('.answer-container');
    const answer = answerContainer.querySelector('.answer');

    // Show the answer after checking
    answer.style.display = "block"; 

    // Provide feedback based on user's answer
    if (userAnswer.includes("html stands for hypertext markup language") && userAnswer.includes("structure content on the web")) {
        feedback.textContent = "Your answer is almost correct! Check the full answer for any additional points.";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Please check the correct answer and try again.";
        feedback.className = "feedback incorrect";
    }

    feedback.style.display = "block"; // Show feedback
}