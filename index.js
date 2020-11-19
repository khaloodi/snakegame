const grid = document.querySelector('.grid');
const start = document.getElementById('start');
const score = document.getElementById('score');
const squares = []
const snake = [0, 1, 2]


console.log('hello')

function createGrid() {
    for (let i = 0; i < 100; i++) {
        // create the element 
        const square = document.createElement('div');

        // add the square class and styles
        square.classList.add('square');

        // add the element to our dom grid
        grid.appendChild(square);

        // append square to squares array
        squares.push(square);
    }
}

createGrid();