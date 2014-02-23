'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl', function($scope) {
  $scope.myusers=[{username:'user1',password:'12323'},{username:'user2',password:'12323'}];
  $scope.submit=function()
  {
     if($scope.username && $scope.password)
     {
    var user=$scope.username;
    var pass=$scope.password;
	var flag=0;
	for(var i=0;i<$scope.myusers.length;i++){
		if(user==$scope.myusers[i].username&&pass==$scope.myusers[i].password){
			flag=1;
			break;
		}
	}
	if(flag==1){
		sessionStorage.username=user;
		$("form").submit();
	}
	else
       alert("Invalid Login");
     }else{
       alert("Invalid Login");
     }
  }
  })
  
  .controller('MyCtrl1', function($scope) {
		if(!sessionStorage.username)
			window.location="#/login";
		$("[data-toggle]").click(function() {
			var toggle_el = $(this).data("toggle");
			$(toggle_el).toggleClass("open-sidebar");
		});
		
		$scope.templates=[{name:"Home",url:"partials/home.html"},{name:"Explore",url:"partials/explore.html"},{name:"Clients",url:"partials/users.html"},{name:"Sign Out",url:"partials/signout.html"}];
		$scope.template=$scope.templates[0];
		
		$scope.clicks=function(id){
			$scope.template=$scope.templates[id];
		}
  });