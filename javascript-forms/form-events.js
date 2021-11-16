function handleFocus(event) {
  console.log('focus event has fired');
  console.log('value of name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event has fired');
  console.log('value of email:', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $inputName = document.getElementById('user-name');
var $inputEmail = document.getElementById('user-email');
var $textArea = document.getElementById('user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
