/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 19, 2022
 */

// function confirms if contact will be deleted
function confirmDelete() {
    let deleteButtons = document.querySelectorAll('.delete');

    for (let button of deleteButtons) {
        button.addEventListener('click', (events) => {
            if (!confirm('Are you sure?')){
                events.preventDefault();
                window.location.assign('/contacts/list');
            }
        })
    }
}

function setUpPage() {
    confirmDelete();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
    window.attachEvent("onload", setUpPage);
}