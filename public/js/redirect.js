function messageSubmitted() {
    let messageInformation = [];
    let firstName = document.getElementById('firstName').value;
    messageInformation.push(firstName);
    let LastName = document.getElementById('lastName').value;
    messageInformation.push(LastName);
    let contactNumber = document.getElementById('contactNumber').value;
    messageInformation.push(contactNumber);
    let message = document.getElementById('message').value;
    messageInformation.push(message);
    alert('Message delivered. I will contact you as soon as I can.');
    console.log(messageInformation);
}

function createEventListeners() {
    let backButton = document.getElementById("submitValue");
    if (backButton.addEventListener) {
        backButton.addEventListener("click", messageSubmitted, false);
    } else if (backButton.attachEvent) {
        backButton.attachEvent("onclick", messageSubmitted);
    }
}

function setUpPage() {
    createEventListeners();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
    window.attachEvent("onload", setUpPage);
}