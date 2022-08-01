const input$$=document.querySelectorAll('input')

var newInput = function(event) {
    console.log(event);
}

input$$.addEventListener('input',newInput)