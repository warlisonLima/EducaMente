document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Captura todos os cliques em links externos
  document.querySelectorAll('a[href^="http"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var href = this.getAttribute("href");
      cordova.InAppBrowser.open(href, '_system'); // ou '_blank'
    });
  });
}

document.querySelectorAll('.abrir-pdf').forEach(function (el) {
	el.addEventListener('click', function (e) {
	  e.preventDefault();
	  var href = this.getAttribute("href");
	  cordova.InAppBrowser.open(href, '_system', 'location=yes');
	});
  });
  

