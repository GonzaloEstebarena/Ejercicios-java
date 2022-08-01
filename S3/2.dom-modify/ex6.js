const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista$$=document.createElement('ul')

const ul$$=document.createElement('ul');

for (const i of apps) {

    const li$$=document.createElement('li');
    li$$.textContent=[i];
    ul$$.appendChild(li$$)
    
}
document.body.appendChild(ul$$);