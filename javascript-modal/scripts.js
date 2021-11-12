var $modal = document.querySelector('.purple');
var $alert = document.querySelector('.container');
var $redAlert = document.querySelector('.alert-button');
var $alertCount = 0;

function onOff() {
  if ($alertCount % 2 === 0) {
    $alert.className = 'container on';
  } else {
    $alert.className = 'container off';
  }
  $alertCount += 1;
}

$modal.addEventListener('click', onOff);
$redAlert.addEventListener('click', onOff);
