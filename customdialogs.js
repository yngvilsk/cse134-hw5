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
    document.getElementById('promptSubmitButton').addEventListener('click', handleSubmit);

}

function handleSubmit() {
    let userInput = document.getElementById('promptInput').value;
    
    if (userInput === null) {
        document.getElementById('output').textContent = `You didn\'t enter a name!`;
    }
    else {
        document.getElementById('output').textContent = `Hello, ${userInput}`;
    }
}



export { showAlertDialog, showConfirmDialog, showPromptDialog }