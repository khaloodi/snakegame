const grid = document.querySelector('.grid');
const start = document.getElementById('start');
const score = document.getElementById('score');
let squares = []
let currentSnake = [2, 1, 0]


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

createGrid()

currentSnake.forEach(idx => squares[idx].classList.add('snake'))

function move() {
    // remove last element from currentSnake array
    let tail = currentSnake.pop();
    // remove style from element
    squares[tail].classList.remove('snake')
        // add square in direction am going

    // add style
}

move()