// Toggle line by clicking
$("ul").on('click', 'li', function() {
    $(this).toggleClass("completed");
    
});

// Click on 'X' to fade then delete line
$("ul").on('click', 'span', function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(600, function() {
        $(this).remove();
    });
})

// Listener for 'enter' key on input
$('input[type=text]').keypress(function(event) {
    if(event.which === 13) {
        addItemToList()
    }
})

function addItemToList () {
    $("#list").prepend(`<li><span><i class="far fa-trash-alt"></i></span> ${$('input').val()}</li>`);
    $('input').val("");
}


