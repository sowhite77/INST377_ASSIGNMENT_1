// Game logic
function playGameV2() {
    var userChoice = document.getElementById('choice').value;
    var choices = ["Rock", "Paper", "Scissors", "Spock"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("computer-choice").textContent = computerChoice;
    var result;
    var bgColor;

    if (computerChoice === "Spock") {
        result = "You Lose";
        bgColor = "red";
    } else if (userChoice === computerChoice) {
        result = "Tie";
        bgColor = "blue";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win";
        bgColor = "green";
    } else {
        result = "You Lose";
        bgColor = "red";
    }
    document.body.style.backgroundColor = bgColor;
    setTimeout(function() {
        alert(result);
    }, 100);
    return false; 
}
// Contact form 
function validateContactForm() {
    var name = document.getElementById("contact-name").value.trim();
    var date = document.getElementById("contact-date").value;
    var message = document.getElementById("contact-message").value;

    if (/[^a-zA-Z0-9\s]/.test(message)) {
        alert("Message cannot contain special characters!");
        return false;
    }
    if (!name || !date || !message) {
        alert("Please fill out all fields.");
        return false;
    }
    window.location.href = "ASMT1_success_SW.html";
    return false;
}

// Success page 
function redirectHomeAfterDelay() {
    setTimeout(function() {
        window.location.href = "ASMT1_home_SW.html";
    }, 5000);
}
