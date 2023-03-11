function showStyledAddDialog() {

    let addDialog = document.getElementById('styledAddDialog');

    // Style it
    addDialog.style.padding = '5px';
    addDialog.style.backgroundColor = 'lightyellow';
    addDialog.style.borderColor = 'rgb(19,74,77)';
    addDialog.style.color = 'rgb(19,74,77)';
    addDialog.style.borderWidth = '1px';
    addDialog.style.borderRadius = '10px';

    /*
    const labels = dialog.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
    labels[i].style.padding = '5px 0';
    }

    const inputs = dialog.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.padding = '5px';
    }
    */
    
    // Show it
    addDialog.showModal();
    
    // Check if user pressed submit
    document.getElementById('styledSubmitBlogPostButton').addEventListener('click', handleSaferPromptSubmit);

}

let styledBlogPosts = [
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

        styledBlogPosts.push(
            {
                'title': cleanPostTitle,
                'date': cleanPostDate,
                'summary': cleanPostSummary,
            }
        );

        updateStyledBlogPostList();
    }
}

function updateStyledBlogPostList() {
    // Clear existing list to avoid duplicating it
    document.getElementById('styledBlogPostList').innerHTML = '';

    styledBlogPosts.forEach((item)=> {
        let li = document.createElement("li");
        li.style.listStyleType = 'none';
        li.innerHTML = `
            <h3>${item.title}</h3>
            <p><i>${item.date}</i></p>
            <p>${item.summary}</p>
        `;

        // Create Delete button 
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15" fill="rgb(19,74,77)" viewBox="0 96 960 960" width="15"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>';

        // Create Edit button
        let editButton = document.createElement("button");
        editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15" fill="rgb(19,74,77)" viewBox="0 96 960 960" width="15"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>';

        // Append buttons to li element
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        
        // Eventlisteners for the buttons
        deleteButton.addEventListener('click', function handleDeletePost(item) {
            // Remove the corresponding blog post from the array
            let index = styledBlogPosts.indexOf(item);
            styledBlogPosts.splice(index, 1);
            updateStyledBlogPostList(); // Update the list to reflect the changes
        });

        editButton.addEventListener('click', function handleEditPost() { 
            showEditForm(item); 
        });

        // Style edit button
        editButton.style.padding = '5px';
        editButton.style.backgroundColor = 'lightyellow';
        editButton.style.borderColor = 'rgb(19,74,77)';
        editButton.style.color = 'rgb(19,74,77)';
        editButton.style.borderWidth = '1px';
        editButton.style.borderRadius = '10px';
        editButton.style.width = '30px';
        editButton.style.margin = 'auto';

        editButton.addEventListener("mouseenter", function( event ) {   
            event.target.style.color = "#EC4F3C";
            event.target.style.borderColor = "#EC4F3C";
            event.target.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" height="15" fill="#EC4F3C" viewBox="0 96 960 960" width="15"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>';
        }, false);
        
        editButton.addEventListener("mouseleave", function( event ) {   
            event.target.style.color = 'rgb(19,74,77)';
            event.target.style.borderColor = 'rgb(19,74,77)';
            event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15" fill="rgb(19,74,77)" viewBox="0 96 960 960" width="15"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>';
        }, false);

       // Style delete button
       deleteButton.style.padding = '5px';
       deleteButton.style.backgroundColor = 'lightyellow';
       deleteButton.style.borderColor = 'rgb(19,74,77)';
       deleteButton.style.color = 'rgb(19,74,77)';
       deleteButton.style.borderWidth = '1px';
       deleteButton.style.borderRadius = '10px';
       deleteButton.style.width = '30px'
       deleteButton.style.rightMargin = '10px';
       deleteButton.style.margin = 'auto';

       deleteButton.addEventListener("mouseenter", function( event ) {   
            event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15" fill="#EC4F3C" viewBox="0 96 960 960" width="15"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>';
            event.target.style.borderColor = "#EC4F3C";
       }, false);
       
       deleteButton.addEventListener("mouseleave", function( event ) {   
           event.target.style.borderColor = 'rgb(19,74,77)';
           event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="15" fill="rgb(19,74,77)" viewBox="0 96 960 960" width="15"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>';
       }, false);


        document.getElementById('styledBlogPostList').appendChild(li);
    })
    //saveBlogPosts(); // Save the updated blogPosts array to localStorage
}

function showEditForm(blogPost) {
    let editDialog = document.getElementById('styledEditDialog');

    // Style it
    editDialog.style.padding = '5px';
    editDialog.style.backgroundColor = 'lightyellow';
    editDialog.style.borderColor = 'rgb(19,74,77)';
    editDialog.style.color = 'rgb(19,74,77)';
    editDialog.style.borderWidth = '1px';
    editDialog.style.borderRadius = '10px';

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

        updateStyledBlogPostList(); // Update the list to reflect the changes
    });
}

// Define saveBlogPosts function to save the blogPosts array to localStorage
function saveBlogPosts() {
    localStorage.setItem('styledblogPosts', JSON.stringify(styledblogPosts));
}



export { showStyledAddDialog, updateStyledBlogPostList }
