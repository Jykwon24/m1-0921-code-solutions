var $form = document.getElementById('contact-form');
var $formObject = {};

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  $formObject.name = $form.elements.name.value;
  $formObject.email = $form.elements.email.value;
  $formObject.message = $form.elements.message.value;
  console.log($formObject);
  $form.reset();
});
