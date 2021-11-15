var $tutor = document.getElementsByTagName('span');
var $button = document.querySelector('.refresh');
var i = 0;
var $incorrectCounter = 0;

document.addEventListener('keydown', function (event) {
  if ($tutor[i].textContent === event.key) {
    // if (i > 0) {
    //   $tutor[i - 1].className = $tutor[i - 1].className.replace('current', '');
    // }
    // console.log($tutor[i]);
    $tutor[i].className = 'correct';
    $tutor[i + 1].className = 'current';
    i++;
  } else {
    $tutor[i].className = 'incorrect current-incorrect';
    $incorrectCounter++;
  }
  if (i === $tutor.length - 1) {
    document.getElementById('score').textContent = 'Incorrect keys: ' + $incorrectCounter;
    $button.className = 'on';
  }
}
);

$button.addEventListener('click', function (event) {
  i = 0;
  $incorrectCounter = 0;
  for (let t = 0; t < $tutor.length; t++) {
    $tutor[t].className = '';
  }
  $tutor[0].className = 'current';
  document.getElementById('score').textContent = '';
  $button.className = 'refresh';
});
