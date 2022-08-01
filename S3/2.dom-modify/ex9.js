let todosDiv$$=document.querySelectorAll('.fn-insert-here')

for (const div$$ of todosDiv$$) {

    const p$$=document.createElement('p');
    p$$.textContent='Voy dentro ';
    div$$.appendChild(p$$)
    
}