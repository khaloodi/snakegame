const grid = document.querySelector('.grid');
const start = document.getElementById('start');
const score = document.getElementById('score');
squares = []

console.log('hello')

function createGrid() {
    for (let i = 0; i < 100; i++) {
        // create the element 
        const square = document.createElement('div');

        // add the square class and styles
        square.classList.add('square');
        console.log(square);

        // add the element to our dom grid
        grid.appendChild(square);

        // append square to squares array
        squares.push(square);
        console.log(squares);
    }
}

createGrid();