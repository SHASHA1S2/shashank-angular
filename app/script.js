var myModule = angular.module('myapp',['ngSanitize']);

myModule.controller('TestController',function($scope,helloWorld,helloWorldFactory,helloWorldService){
	$scope.title = 'Angular JS';
	$scope.text = 'Angular JS is fun...';
	$scope.hellos = [helloWorldService.sayHello(), helloWorldFactory.sayHello(), helloWorld.sayHello()];
	$scope.snippet = 'Text with some links: '+
    'http://angularjs.org/, '+
    'mailto:us@somewhere.org, '+
    'another@somewhere.org, '+
    'and one more: ftp://127.0.0.1/.';
});

myModule.directive('pane', function(){
	return {
		restrict: 'E',
		transclude: true,
		template: '<div style="border: 1px solid black;"><div style="background-color: gray">{{title}}</div><div ng-transclude>sdf</div></div>'
	};
});

myModule.service('helloWorldService', function() {
	this.sayHello = function() {
		return "Hello, World!"
	};
});

myModule.factory('helloWorldFactory', function() {
	return {
		sayHello: function(){
			return "Hello, World!"
		}
	};
});

myModule.provider('helloWorld', function() {
	this.name = 'Default';
	this.$get = function() {
		var name = this.name;
		return {
			sayHello: function() {
				return "Hello, " + name + "!"
			}
		}
	};
	this.setName = function(name) {
	this.name = name;
	};
});

myModule.config(function(helloWorldProvider){
    helloWorldProvider.setName('World');
});