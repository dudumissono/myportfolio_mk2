/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

function messageSubmitted() {
    let messageInformation = [];
    let firstName = document.getElementById('firstName').value;
    let LastName = document.getElementById('lastName').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let message = document.getElementById('message').value;

    messageInformation.push(firstName);
    messageInformation.push(LastName);
    messageInformation.push(contactNumber);
    messageInformation.push(message);
    console.log(messageInformation);

    alert('Message delivered. I will contact you as soon as I can.');
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