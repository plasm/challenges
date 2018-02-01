// jQuery style
$(function(){
  var selector = "item-link";
  $("body").on("click", "." + selector, function(event){
    event.preventDefault();

    var node = $(event.target);
    var text = node.text();
    node.text("Hai cliccato: " + text).removeClass(selector);
  })
})
