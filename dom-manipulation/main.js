var $buttonClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function buttonClicks() {
  if ($buttonClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if ($buttonClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if ($buttonClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if ($buttonClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if ($buttonClicks < 16) {
    $hotButton.className = 'hot-button how';
  } else if ($buttonClicks > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
  $buttonClicks += 1;
  $clickCount.textContent = 'Clicks:' + ' ' + $buttonClicks;

}

$hotButton.addEventListener('click', buttonClicks);
