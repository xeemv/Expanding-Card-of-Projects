const panels = document.querySelectorAll('.panel');
/* 
- select active classes to change the classes/IDs
- id = .panel  
*/

panels.forEach(panel => {  
    // looping through to all panels to call  an action
    panel.addEventListener('click', () => {
        // using eventlistener to call the function when a panel is clicked on
        removeActiveClasses();
        // this is to prevent other panels from being expanded while the selected panel being viewed
        // this will close that panel
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}