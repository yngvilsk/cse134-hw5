function styleEditButton () {

    let editButton = document.getElementById
    addButton.style.padding = '5px';
    addButton.style.backgroundColor = 'lightyellow';
    addButton.style.borderColor = 'rgb(19,74,77)';
    addButton.style.borderWidth = '1px';
    addButton.style.borderRadius = '10px';
    addButton.style.width = '70px'

    addButton.addEventListener("mouseenter", function( event ) {   
        event.target.style.color = "#EC4F3C";
        event.target.style.borderColor = "#EC4F3C";
    }, false);
    
    addButton.addEventListener("mouseleave", function( event ) {   
        event.target.style.color = "";
    }, false);

}

export { styleEditButton }