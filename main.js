var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  start: false
};

var $img = document.querySelector('img');
var intervalID;
function handleKeyDown(event) {
  if (event.code === 'ArrowUp') {
    intervalID = clearInterval(intervalID);
    data.direction = 'north';
    data.start = true;
    turn(data.direction);
    intervalID = setInterval(moveUp, 16);
  } else if (event.code === 'ArrowLeft') {
    intervalID = clearInterval(intervalID);
    data.direction = 'west';
    data.start = true;
    turn(data.direction);
    intervalID = setInterval(moveLeft, 16);
  } else if (event.code === 'ArrowDown') {
    intervalID = clearInterval(intervalID);
    data.direction = 'south';
    data.start = true;
    turn(data.direction);
    intervalID = setInterval(moveDown, 16);
  } else if (event.code === 'ArrowRight') {
    intervalID = clearInterval(intervalID);
    data.direction = 'east';
    data.start = true;
    turn(data.direction);
    intervalID = setInterval(moveRight, 16);
  } else if (event.code === 'Space') {
    if (data.start === false) {
      data.start = true;
      if (data.direction === 'south') {
        intervalID = setInterval(moveDown, 16);
      } else if (data.direction === 'north') {
        intervalID = setInterval(moveUp, 16);
      } else if (data.direction === 'east') {
        intervalID = setInterval(moveRight, 16);
      } else if (data.direction === 'west') {
        intervalID = setInterval(moveLeft, 16);
      }
    } else {
      data.start = false;
      intervalID = clearInterval(intervalID);
    }
  }
}

document.addEventListener('keydown', handleKeyDown);

function turn(direction) {
  $img.className = direction;
}

function moveRight() {
  $img.style.left = data.location.x++ + 'rem';
}

function moveLeft() {
  $img.style.left = data.location.x-- + 'rem';
}

function moveDown() {
  $img.style.top = data.location.y++ + 'rem';
}

function moveUp() {
  $img.style.top = data.location.y-- + 'rem';
}
