var data = {
  direction: 'east'
};

function handleKeyDown(event) {
  if (event.code === 'ArrowUp') {
    data.direction = 'north';
  } else if (event.code === 'ArrowLeft') {
    data.direction = 'west';
  } else if (event.code === 'ArrowDown') {
    data.direction = 'south';
  } else if (event.code === 'ArrowRight') {
    data.direction = 'east';
  }
}

document.addEventListener('keydown', handleKeyDown);
