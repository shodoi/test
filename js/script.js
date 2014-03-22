var myApp = angular.module("myApp", []);

myApp.constructor("TestCtrl", ["$scope", function($scope){
	$scope.name = 'hoge';
}]);