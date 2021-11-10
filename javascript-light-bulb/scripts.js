var $click = document.querySelector('.bulb');
var $back = document.querySelector('.on');
var $clickCount = 0;

function onOff() {
  if ($clickCount % 2 === 0) {
    $click.className = 'bulb off';
    $back.className = 'off';
  } else {
    $click.className = 'bulb on';
    $back.className = 'on';
  }
  $clickCount += 1;
}

$click.addEventListener('click', onOff);
