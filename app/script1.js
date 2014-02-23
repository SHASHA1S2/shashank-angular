var myModule = angular.module('myapp',[]);

myModule.controller('C1',function($scope){
	$scope.places=[{'name':'India','cities':[{'name':'New Delhi'},{'name':'Mumbai'},{'name':'Bangalore'}]},
	{'name':'Australia','cities':[{'name':'Melbourne'},{'name':'Perth'},{'name':'Canberra'}]},
	{'name':'USA','cities':[{'name':'New York'},{'name':'Washington DC'},{'name':'California'}]}
	];
	$scope.country='';
	$scope.city='';
	$scope.name = "Angular";
	$scope.updated = -1;
	$scope.$watch('name', function() {
		$scope.updated++;
	});
	$scope.r=function(){
		if($scope.name==='Angular')
			$scope.updated=0;
		else
			$scope.updated=-1;
		$scope.name='Angular';
	}
});