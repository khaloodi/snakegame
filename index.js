const grid = document.querySelector('.grid');
const start = document.getElementById('start');
const score = document.getElementById('score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;

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

currentSnake.forEach(idx => squares[idx].classList.add('snake'))

function generateApples() {
    do {
        //generate a random number
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
generateApples()

function move() {

    if (
        (currentSnake[0] + width >= 100 && direction === 10) || //if snake has hit bottom
        (currentSnake[0] % width === 9 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -10) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake') //if snake runs into itself
    )
        return clearInterval(timerId)



    //deal with snake head getting the apple
    if () {
        //remove the class of apple

        //grow our snake by adding class of snake to it

        //grow our snake array

        //generate a new apple

        //add one to the score

        //speed up our snake

    }

    // remove last element from currentSnake array
    let tail = currentSnake.pop();
    // remove style from element
    squares[tail].classList.remove('snake');
    // add square in direction am going
    currentSnake.unshift(currentSnake[0] + direction);
    // add style
    squares[currentSnake[0]].classList.add('snake');
}

move();

const timerId = setInterval(move, 1000);
// to stop the infinite move clearInterval(timerId)

// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed')
        direction = 1;
    }
    if (e.keyCode === 38) {
        console.log('up pressed')
        direction = -width;
    }
    if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1;
    }
    if (e.keyCode === 40) {
        console.log('down pressed')
        direction = width;
    }
}

document.addEventListener('keyup', control);