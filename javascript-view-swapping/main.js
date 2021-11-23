var $tabContainer = document.querySelector('.tab-container');

var $tabNodeList = document.querySelectorAll('.tab');

var $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  var $tab = event.target;

  if ($tab.matches('.tab') === true) {
    // .matches method returns a boolean value
    // if true we loop through the node list below
    for (var i = 0; i < $tabNodeList.length; i++) {
      if ($tab === $tabNodeList[i]) {
        // if the event.target, which in this case is the click.
        // we set what we clicked on to a different class.
        $tabNodeList[i].className = 'tab active';
        // $tab.className worked, why?
      } else {
        // else the rest of the nodelist at[i] is removed the active class.
        $tabNodeList[i].className = 'tab';
      }
    }
  }
  if ($tab.matches('.tab') === true) {
    var $tabAtt = $tab.getAttribute('data-view');

    for (i = 0; i < $viewNodeList.length; i++) {
      var $viewAtt = $viewNodeList[i].getAttribute('data-view');

      if ($tabAtt === $viewAtt) {
        $viewNodeList[i].className = 'view';
      } else {
        $viewNodeList[i].className = 'hidden';
      }

    }
  }
});
