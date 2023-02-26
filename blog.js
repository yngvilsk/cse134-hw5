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




function showAddBlogPostDialog() {
    // Show the confirm dialog
    document.getElementById('addBlogPostDialog').showModal();
    
    // Check if user pressed submit
    document.getElementById('submitBlogPostButton').addEventListener('click', handleSaferPromptSubmit);

}

let blogPosts = [
    ['Homemade Acaii Bowl', 'February 13, 2023', 'Save money by making your favorouite bowl at home! My recipe has only 3 steps.'],
    ['Top Movies 2022', 'December 22, 2022', 'Here is what I think were the best movies this year'],
];

function handleSaferPromptSubmit() {
    let dirtyPostTitle = document.getElementById('postTitle').value;
    let dirtyPostDate = document.getElementById('postDate').value;
    let dirtyPostSummary = document.getElementById('postSummary').value;

    if (dirtyPostTitle == '') {
        document.getElementById('errorPostTitle').textContent = `Please enter a title`;
    }
    else if (dirtyPostDate == '') {
        document.getElementById('errorPostDate').textContent = `Please enter a date`;
    }
    else if (dirtyPostSummary == '') {
        document.getElementById('errorPostSummary').textContent = `Please enter a summary`;
    }

    else {
        // Sanitize the user input using DOMPurify
        let cleanPostTitle = DOMPurify.sanitize(dirtyPostTitle);
        let cleanPostDate = DOMPurify.sanitize(dirtyPostDate);
        let cleanPostSummary = DOMPurify.sanitize(dirtyPostSummary);

        blogPosts.push([cleanPostTitle, cleanPostDate, cleanPostSummary]);

        updateBlogPostList();
    }
}

function updateBlogPostList() {
    blogPosts.forEach((item)=> {
        let li = document.createElement("li");
        li.innerHTML = item;
        document.getElementById('blogPostList').appendChild(li);
    })
}



export { showAlertDialog, showConfirmDialog, showAddBlogPostDialog, updateBlogPostList }