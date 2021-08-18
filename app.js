// Initialise number of balloons popped to zero 
let popped = 0;

document.addEventListener('mouseover', function(e) {

    if (e.target.className === "balloon") {

        // Change background to body background color
        e.target.style.backgroundColor = "#ededed";
        // Add text to the element 
        e.target.textContent = "POP!";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function() {

    })
};

function checkAllPopped() {
    if (popped === 24) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');

        // Remove all balloons when popped count is 24, that is all balloons have been popped 
        gallery.innerHTML = '';

        // Then show show the content for no balloons 
        message.style.display = 'block';
    }
};