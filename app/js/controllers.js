'use strict';
/* Controllers */

//Controller for Login Page
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
		if(angular.equals(user,$scope.myusers[i].username)&&angular.equals(pass,$scope.myusers[i].password)){
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
  
  //Controller for welcome Page
  .controller('MyCtrl1', function($scope) {
		if(!sessionStorage.username)
			window.location="#/login";
		$("[data-toggle]").click(function() {
			var toggle_el = $(this).data("toggle");
			$(toggle_el).toggleClass("open-sidebar");
		});
		
		$scope.templates=[{name:"Filter Demo",url:"partials/filterdemo.html"},{name:"Search & Sort",url:"partials/searchsort.html"},{name:"Inheritence Example",url:"partials/inherit.html"},{name:"Sign Out",url:"partials/signout.html"}];
		$scope.template=$scope.templates[0];
		
		$scope.clicks=function(id){
			$scope.template=$scope.templates[id];
		}
		
		$scope.friends=[{name:'John', phone:'1234567890',age:22},{name:'Mary', phone:'9824543210',age:23},{name:'Mike', phone:'9765843210',age:21},{name:'Adam', phone:'8826457890',age:24},{name:'Julie', phone:'8860987654',age:22},{name:'Juliette', phone:'9718456678',age:23}];
  })
  
  //Controller for Inheritence Example
  .controller("C1",function($scope){
	$scope.name="Shashank";
	$scope.greeting="Welcome";
  })
  .controller("C2",function($scope){
	$scope.greeting="Hello";
  });