function main(){
  $(".books").hide();
  $(".books-button").on("click", function(){
		$(this).toggleClass("active");
    $(this).next().slideToggle(400);
  })
}
$(document).ready(main);
