// Vanilla style
document.addEventListener("DOMContentLoaded", function() {
  var selector = 'item-link';
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains(selector)) {
      event.preventDefault();
      alert(event.target.text)
    }
  });
});
