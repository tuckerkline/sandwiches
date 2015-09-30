angular.module('sandwichApp', [])

var sandwichControllerFunc = function($scope) {
	$scope.sandwiches = []
	$scope.submit = function() {
		var newSandwich = {}
		newSandwich.name = $scope.name
		newSandwich.recipe = $scope.recipe
		$scope.sandwiches.push(newSandwich)
		$scope.name = undefined
		$scope.recipe = undefined
	}
	$scope.delete = function(index) {
		$scope.sandwiches.splice(index, 1)
	}




}










angular.module('sandwichApp').controller('sandwichController', ['$scope', sandwichControllerFunc])