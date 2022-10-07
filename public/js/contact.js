/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

// function that uses an alert to inform the user that the form was submitted and show information gathered in console
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

// function that hide phone icon and shows phone number
function showPhone() {
    let icon = document.getElementById('phoneIcon');
    let phone = document.getElementById('phoneNumber');
    icon.style.visibility = 'hidden';
    phone.style.visibility = 'visible';
}

// function that hide email icon and shows email
function showEmail() {
    let icon = document.getElementById('emailIcon');
    let email = document.getElementById('contactEmail');
    icon.style.visibility = 'hidden';
    email.style.visibility = 'visible';
}

function createEventListeners() {
    let backButton = document.getElementById("submitValue");
    if (backButton.addEventListener) {
        backButton.addEventListener("click", messageSubmitted, false);
    } else if (backButton.attachEvent) {
        backButton.attachEvent("onclick", messageSubmitted);
    }

    let phoneIcon = document.getElementById("phoneIcon");
    if (phoneIcon.addEventListener) {
        phoneIcon.addEventListener("click", showPhone, false);
    } else if (phoneIcon.attachEvent) {
        phoneIcon.attachEvent("onclick", showPhone);
    }

    let emailIcon = document.getElementById("emailIcon");
    if (emailIcon.addEventListener) {
        emailIcon.addEventListener("click", showEmail, false);
    } else if (emailIcon.attachEvent) {
        emailIcon.attachEvent("onclick", showEmail);
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