const boton$$=document.createElement('button');
boton$$.textContent='Boton';
boton$$.setAttribute=('id','btnToClick');
document.body.appendChild(boton$$);

var handleClick = function(event) {
    console.log(event);
 }

boton$$.addEventListener('click',handleClick);




