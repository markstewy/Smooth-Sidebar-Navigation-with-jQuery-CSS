// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('navDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './directive/nav.html',
   //  controller: 'navCtrl',
    //============= HAMBURGER MENU jQuery =================
    link: function(scope, element, attribute) {

                $(".btn-nav").on("click tap", function() {
                  $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
                  $(this).toggleClass("animated");
                   scope.$apply() //the fix to get jQuery working in a directive
                });

  }//,//END OF LINK
   //  scope:
};//END OF RETURN
});


// https://bencentra.com/code/2015/09/29/jquery-plugins-angular-directives.html
