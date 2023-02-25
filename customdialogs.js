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

function showPromptDialog() {
    document.getElementById('output').innerText = "";
    // Show the confirm dialog
    document.getElementById('promptDialog').showModal();

    // Check if user pressed cancel
    document.getElementById('cancelButton').addEventListener('click', function handleCancel() {
        document.getElementById('output').textContent = ``;
    });
    
    // Check if user pressed submit
    document.getElementById('promptSubmitButton').addEventListener('click', handlePromptSubmit);

}

function handlePromptSubmit() {
    let userInput = document.getElementById('promptInput').value;

    if (userInput == '') {
        document.getElementById('output').textContent = `You didn\'t enter a name!`;
    }
    else {
        document.getElementById('output').textContent = `Hello, ${userInput}`;
    }
}

function showSaferPromptDialog() {
    document.getElementById('output').innerText = "";
    // Show the confirm dialog
    document.getElementById('promptDialog').showModal();

    // Check if user pressed cancel
    document.getElementById('cancelButton').addEventListener('click', function handleCancel() {
        document.getElementById('output').textContent = ``;
    });
    
    // Check if user pressed submit
    document.getElementById('promptSubmitButton').addEventListener('click', handleSaferPromptSubmit);

}

function handleSaferPromptSubmit() {
    let dirtyUserInput = document.getElementById('promptInput').value;

    if (userInput == '') {
        document.getElementById('output').textContent = `You didn\'t enter a name!`;
    }
    else {
        // Sanitize the user input using DOMPurify
        let cleanInput = DOMPurify.sanitize(dirtyInput);

        document.getElementById('output').innerHTML = `Hello, ${cleanInput}`;
    }
}



export { showAlertDialog, showConfirmDialog, showPromptDialog, showSaferPromptDialog }