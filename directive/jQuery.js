$(document).ready(function(){

       $(window).load(function() {
           $(".btn-nav").on("click tap", function() {
               $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
               $(this).toggleClass("animated");
           });
       });


});
//link src jQuery CDN and .js file at bottom of html
