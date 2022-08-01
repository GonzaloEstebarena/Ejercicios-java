const input$$=document.querySelectorAll('input');



var newEvent = function(event) {
    console.log(event);
}


input$$.addEventListener('focus',newEvent)