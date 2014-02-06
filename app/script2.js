var app = angular.module('test', []);
app.factory('sharedContent', function ($rootScope) {
    var standardContent;
    return {
        setStandardContent: function (newStandardContent) {
            standardContent = newStandardContent;
            $rootScope.$broadcast('updateContent');
        },
        getStandardContent: function () {
            return standardContent;
        }
    }
});
app.run(function (sharedContent) {
    sharedContent.setStandardContent('haha');
});

function testCtrl($scope, sharedContent) {
    $scope.testContent;
    $scope.$on('updateContent', function () {
        $scope.testContent = sharedContent.getStandardContent();
    });
}

function testCtrl2($scope, sharedContent) {
    $scope.testContent2 = 'test';
	$scope.$watch('testContent2',function(){
		if ($scope.testContent2 === undefined || $scope.testContent2 === null) {
            return;
        }
		sharedContent.setStandardContent($scope.testContent2);
	});
}

app.factory('HelloWorld', function($q, $timeout) {
    var getMessages = function() {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(['Hello', 'world']);
      }, 2000);
      return deferred.promise;
    };
    return {
      getMessages: getMessages
    };
  })
  .controller('HelloCtrl', function($scope, HelloWorld) {
    HelloWorld.getMessages().then(function(messages) {
      $scope.messages = messages;
    });
  });