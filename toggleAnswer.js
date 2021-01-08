

$(document).ready(function(){
  var allPanels = $('.main-content > .drop > .answer').hide();

  $('.arrow-down').click(function(){

    if ($(this).prev().hasClass("make-bold")){
      allPanels.slideUp();
      $(this).prev().removeClass("make-bold");
      return
    } else {
      $('.question').removeClass("make-bold");
      $(this).prev().addClass("make-bold");
      allPanels.slideUp();
      $(this).parent().next().slideDown();
    }
  })
});