// JavaScript Document
myApp.controller('HomeController', ['$scope', function($scope){
  $scope.showMenu = function() {
    $("#wrapper").toggleClass("toggled");
  }
}]);

myApp.controller('MyTVController', ['$scope', function($scope){
  
  $scope.showMenu = function() {
    $("#wrapper").toggleClass("toggled");
  };

  //$scope.firstname = "John";
  $scope.liveTV = true;
  angular.element(document).ready(function () {
  //OnLoad a live stream.
//$scope.test('Hey there.');
$('#myPlayer').hide();
         $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
    });
         $('label.tree-toggler').parent().children('ul.tree').toggle(300);
});

  //load video function
$scope.playvideo = function(x){
$scope.liveTV = false;
console.log($scope.liveTV);
//remove live Stream
if($('#ntvlive:visible')){
   $('#ntvlive').remove();
}

if($('#nbslive:visible')){
   $('#nbslive').remove();
}

var myVideoPlayer = $('#myPlayer');
myVideoPlayer.show();
var myChan = $('#myChannel');
myChan.attr('src', x);
	myVideoPlayer.load();
  //alert(x);
}

//Load live stream
$scope.liveStream = function(channel){

//Remove playing video
 $("#myChannel").attr('src','');
 $('#myPlayer').load();
 $('#myPlayer').hide();

var liveTV = $('#livestream');
switch(channel) {
    case 'ntv':
    if(!$scope.liveTV){
        liveTV.html('<iframe id="ntvlive" width="100%" height="450" src="https://www.youtube.com/embed/au3B-w5bKuk?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'); 
        $scope.liveTV = true;
    }
        break;
    case 'nbs':
        if(!$scope.liveTV){
        console.log('ntvlive');
        liveTV.html('<p id="nbslive" class="text text-danger"><i class="fa fa-times"></i> No live stream found</p>'); 
        $scope.liveTV = true;
    }
        break;
}
}
//Onload
$scope.test = function(val){
console.log(val)
}

}]);
