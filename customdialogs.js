
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
        //document.getElementById('confirmDialog').close();
    });

    // Check if user pressed confirm
    document.getElementById('confirmButton').addEventListener('click', function handleCancel() {
        document.getElementById('output').textContent = `The value returned by confirm method is: true`;
        //document.getElementById('confirmDialog').close();
    });

}



export { showAlertDialog, showConfirmDialog }