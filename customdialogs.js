import { func } from "prop-types";

function showAlertDialog() {
    document.getElementById('output').innerText = "";
    // Show the alert dialog
    document.getElementById('alertDialog').showModal();
}

function showConfirmDialog() {
    document.getElementById('output').innerText = "";
    // Show the confirm dialog
    document.getElementById('confirmDialog').showModal();

    // Check if user pressed cancel
    document.getElementById('cancelButton').addEventListener('click', function handleCancel() {
        console.log('User pressed cancel');
        document.getElementById('output').textContent = `The value returned by confirm method is: false`;
        //document.getElementById('confirmDialog').close();
    });

    // Check if user pressed confirm
    document.getElementById('confirmButton').addEventListener('click', function handleCancel() {
        console.log('User pressed confirm');
        document.getElementById('output').textContent = `The value returned by confirm method is: true`;
        //document.getElementById('confirmDialog').close();
    });
}

function showPromptDialog() {
    document.getElementById('output').innerText = "";
    // Show the confirm dialog
    document.getElementById('promptDialog').showModal();
    let userInput = document.getElementById('promptInput').value;

    if (userInput === null) {
        document.getElementById('output').textContent = `You didn\'t enter a name!`;
    }
    else {
        document.getElementById('output').textContent = `Hello, ${userInput}`;
    }
}



export { showAlertDialog, showConfirmDialog, showPromptDialog }