function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', $clickButton);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', $hoverButton);
}

var $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('double click button');
  console.log('event:', event);
  console.log('event.target:', $doubleClick);
}

var $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick, false);
