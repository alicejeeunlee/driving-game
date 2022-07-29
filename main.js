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
    data.direction = 'north';
    $img.className = data.direction;
  } else if (event.code === 'ArrowLeft') {
    data.direction = 'west';
    $img.className = data.direction;
  } else if (event.code === 'ArrowDown') {
    data.direction = 'south';
    $img.className = data.direction;
  } else if (event.code === 'ArrowRight') {
    data.direction = 'east';
    $img.className = data.direction;
  } else if (event.code === 'Space') {
    if (data.start === false) {
      data.start = true;
      intervalID = setInterval(moveRight, 16);
    } else {
      data.start = false;
      intervalID = clearInterval(intervalID);
    }
  }
}

document.addEventListener('keydown', handleKeyDown);

function moveRight() {
  $img.style.left = data.location.x++ + 'rem';
}

clearInterval(intervalID);
