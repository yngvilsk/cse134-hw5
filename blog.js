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
    {
        'title': 'Homemade Acaii Bowl',
        'date': '2023-02-03',
        'summary': 'Save money by making your favorouite bowl at home! My recipe has only 3 steps.',
    },
    {
        'title': 'Top Movies 2022',
        'date': '2023-12-12',
        'summary': 'Here is what I think were the best movies this year',
    },
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

        blogPosts.push(
            {
                'title': cleanPostTitle,
                'date': cleanPostDate,
                'summary': cleanPostSummary,
            }
        );

        updateBlogPostList();
    }
}

function updateBlogPostList() {
    // Clear existing list to avoid duplicating it
    document.getElementById('blogPostList').innerHTML = '';

    blogPosts.forEach((item)=> {
        let li = document.createElement("li");
        li.innerHTML = item.title + item.date + item.summary;

        // Create Delete button 
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        // Create Edit button
        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";

        // Append buttons to li element
        li.appendChild(deleteButton);
        li.appendChild(editButton);


        // Eventlisteners for the buttons
        deleteButton.addEventListener('click', function handleDeletePost(item) {
            console.log("Delete pressed");
            // Remove the corresponding blog post from the array
            let index = blogPosts.indexOf(item);
            blogPosts.splice(index, 1);
            updateBlogPostList(); // Update the list to reflect the changes
        });

        editButton.addEventListener('click', function handleEditPost(item) { 
            showEditForm(item); 
        });


        document.getElementById('blogPostList').appendChild(li);
    })
}

function showEditForm(blogPost) {
    console.log("Edit pressed");
    let editDialog = document.getElementById('editBlogPostDialog');
    editDialog.showModal();
    /*
    // Show the edit post dialog
    // Show the dialog if it is not already open
    if (!editDialog.hasAttribute("open")) {
        document.body.appendChild(editDialog);
        editDialog.showModal();
    }
    */
   console.log(blogPost.title);

    // Pre-fill the form fields with the values from the blogPost object
    editDialog.querySelector("#editPostTitle").value = blogPost.title;
    editDialog.querySelector("#editpPostDate").value = blogPost.date;
    editDialog.querySelector("#editPostSummary").value = blogPost.summary;
    
    // Add a submit event listener to the form
    document.getElementById('editSubmitBlogPostButton').addEventListener("click", function handleEditPost() {

        // Update the blogPost object with the values from the form fields
        blogPost.title = editDialog.querySelector("#editPostTitle").value;
        blogPost.date = editDialog.querySelector("#editpPostDate").value;
        blogPost.summary = editDialog.querySelector("#editPostSummary").value;

        updateBlogPostList(); // Update the list to reflect the changes
    });

}



export { showAlertDialog, showConfirmDialog, showAddBlogPostDialog, updateBlogPostList }

/**
 *     // Create button element
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => {
        showConfirmDialog();
    };
    li.appendChild(deleteButton);
 */