const board = document.querySelector('#board')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple', 'white']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target

    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //Добавим "объёма"
}

function removeColor(event) {
    const element = event.target

    element.style.backgroundColor = '#FF9800'
    element.style.boxShadow = `0 0 2px #FF9800`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
