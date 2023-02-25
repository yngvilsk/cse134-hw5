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
        document.getElementById('output').textContent = `The value returned by confirm method is: false`;
    });

    // Check if user pressed confirm
    document.getElementById('confirmButton').addEventListener('click', function handleConfirm() {
        document.getElementById('output').textContent = `The value returned by confirm method is: true`;
    });
}




function showSaferPromptDialog() {
    document.getElementById('output').innerText = "";
    // Show the confirm dialog
    document.getElementById('saferPromptDialog').showModal();
    
    // Check if user pressed submit
    document.getElementById('saferPromptSubmitButton').addEventListener('click', handleSaferPromptSubmit);

}

function handleSaferPromptSubmit() {
    let dirtyUserInput = document.getElementById('saferPromptInput').value;

    if (dirtyUserInput == '') {
        document.getElementById('output').textContent = `You didn\'t enter a name!`;
    }
    else {
        // Sanitize the user input using DOMPurify
        let cleanInput = DOMPurify.sanitize(dirtyUserInput);

        document.getElementById('output').innerHTML = `Hello, ${cleanInput}`;
    }
}



export { showAlertDialog, showConfirmDialog, showSaferPromptDialog }