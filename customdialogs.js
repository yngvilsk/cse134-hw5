
function showAlertDialog() {
    // Show the alert dialog
    document.getElementById('alertDialog').showModal();
}

function showConfirmDialog() {
    // Show the confirm dialog
    document.getElementById('confirmDialog').showModal();

    // Check if user pressed cancel
    let cancelClicked = false;
    document.getElementById('cancelButton').addEventListener('click', function handleCancel() {
        cancelClicked = true;
    });
    if (cancelClicked) {
        document.getElementById('output').textContent = `The value returned by confirm method is: ${!cancelClicked}`;
        document.getElementById('confirmDialog').close();
    }
    document.getElementById('output').textContent = `The value returned by confirm method is: ${!cancelClicked}`;
}



export { showAlertDialog, showConfirmDialog }