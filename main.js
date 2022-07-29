var data = {
  direction: 'east'
};

var $img = document.querySelector('img');

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
  }
}

document.addEventListener('keydown', handleKeyDown);
