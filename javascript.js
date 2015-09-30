angular.module('sandwichApp', [])

var sandwichControllerFunc = function($scope) {

	$scope.sandwiches = []
	$scope.submit = function() {
		var newSandwich = {}
		newSandwich.name = $scope.name
		newSandwich.recipe = $scope.recipe
		newSandwich.ingredients = $scope.ingredients
		newSandwich.comments = []
		$scope.sandwiches.push(newSandwich)
		$scope.name = undefined
		$scope.recipe = undefined
		$scope.ingredients = []
	}
	$scope.delete = function(index) {
		$scope.sandwiches.splice(index, 1)
	}

	$scope.removeIngredient = function(index) {
		$scope.ingredients.splice(index, 1)
	}

	$scope.ingredients = []
	$scope.add = function() {
	    if ($scope.ingredientName) {    
	        $scope.ingredients.push($scope.ingredientName);
	        $scope.ingredientName = '';
	    }
    };


    $scope.addComment = function(sandwichIndex) {
    	$scope.sandwiches[sandwichIndex].comments.push($scope.sandwiches[sandwichIndex].addedComment)
    	$scope.sandwiches[sandwichIndex].addedComment = undefined
   	}

 
    



}

angular.module('sandwichApp').controller('sandwichController', ['$scope', sandwichControllerFunc])