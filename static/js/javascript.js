// JS, JQuery and AJAX calls for Creative Cropper

$(function () { // this is the jquery shortcut for document.ready()

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("upload");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

////////////////////// EXTRA UX AND UI FUNCTIONALITY ///////////////////////////

    // ===== Scroll to Top Button ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {       // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    // goes to the top if clicked on the side arrow button
    $('#return-to-top').on('click', function(){
        $('html,body').animate({scrollTop: 0}, 1000,'swing');
    });

});

// ===== Scroll to Top When the Page is loaded ==== 

$(document).ready(function(){
    $('html,body').animate({scrollTop: 0}, 1000,'swing');
});
