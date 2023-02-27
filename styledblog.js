function showStyledAddDialog() {
    // Show the confirm dialog
    document.getElementById('styledAddDialog').showModal();
    
    // Check if user pressed submit
    document.getElementById('styledSubmitBlogPostButton').addEventListener('click', handleSaferPromptSubmit);

}

let blogPosts = [
    {
        'title': 'Homemade Acai Bowl',
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
    let dirtyPostTitle = document.getElementById('styledPostTitle').value;
    let dirtyPostDate = document.getElementById('styledPostDate').value;
    let dirtyPostSummary = document.getElementById('styledPostSummary').value;

    if (dirtyPostTitle == '') {
        document.getElementById('output').textContent = `Please enter a title`;
    }
    else if (dirtyPostDate == '') {
        document.getElementById('output').textContent = `Please enter a date`;
    }
    else if (dirtyPostSummary == '') {
        document.getElementById('output').textContent = `Please enter a summary`;
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
    document.getElementById('styledBlogPostList').innerHTML = '';

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
            // Remove the corresponding blog post from the array
            let index = blogPosts.indexOf(item);
            blogPosts.splice(index, 1);
            updateBlogPostList(); // Update the list to reflect the changes
        });

        editButton.addEventListener('click', function handleEditPost() { 
            showEditForm(item); 
        });


        document.getElementById('styledBlogPostList').appendChild(li);
    })
    saveBlogPosts(); // Save the updated blogPosts array to localStorage
}

function showEditForm(blogPost) {
    let editDialog = document.getElementById('styledEditDialog');
    editDialog.showModal();

    // Pre-fill the form fields with the values from the blogPost object
    document.getElementById("styledEditpPostTitle").value = blogPost.title;
    document.getElementById("styledEditPostDate").value = blogPost.date;
    document.getElementById("styledEditPostSummary").value = blogPost.summary;
    
    // Add a submit event listener to the form
    document.getElementById('styledSubmitEditButton').addEventListener("click", function handleEditPost() {

        // Update the blogPost object with the values from the form fields
        blogPost.title = document.getElementById("styledEditpPostTitle").value;
        blogPost.date = document.getElementById("styledEditPostDate").value;
        blogPost.summary = document.getElementById("styledEditPostSummary").value;

        updateBlogPostList(); // Update the list to reflect the changes
    });
}

// Define saveBlogPosts function to save the blogPosts array to localStorage
function saveBlogPosts() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }



export { showAlertDialog, showStyledAddDialog, updateBlogPostList }
