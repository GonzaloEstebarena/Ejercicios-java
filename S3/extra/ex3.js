const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const ul$$=document.createElement('ul');

for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    const li$$=document.createElement('li');
    li$$.textContent=car;
    ul$$.appendChild(li$$)
}

const div$$=document.querySelector('[data-function="printHere"]');

div$$.appendChild(ul$$);