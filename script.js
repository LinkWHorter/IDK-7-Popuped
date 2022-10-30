$(document).ready(function() {
  $("#btn-up").click(function() {
    $("#pop-cont,.mask").hide().fadeIn(405);
  });

  $("#btn-close,.mask").click(function() {
    $("#pop-cont,.mask").fadeOut(405);
  })

  //close the POPUP if the button with id="close" is clicked
  /*$("#btn-close,.mask").on("click", function (e) {
    e.preventDefault();
    $("#pop-cont,.mask").fadeOut(405);
  });*/
  
})