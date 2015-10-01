angular.module('sandwichApp', [])

var sandwichControllerFunc = function($scope) {

	$scope.sandwiches = []
	$scope.submit = function() {
		if ($scope.picURL) {
			var newSandwich = {}
			newSandwich.name = $scope.name
			newSandwich.recipe = $scope.recipe
			newSandwich.ingredients = $scope.ingredients
			newSandwich.comments = []
			newSandwich.pic = $scope.picURL
			$scope.sandwiches.push(newSandwich)
			$scope.name = undefined
			$scope.recipe = undefined
			$scope.picURL = undefined
			$scope.showPic = false
			$scope.ingredients = []
		}
	}
	$scope.delete = function(sandwichIndex) {
		$scope.sandwiches.splice(sandwichIndex, 1)
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

    $scope.showPic = false;
    $scope.uploadPic = function() {
    	console.log("hi")
    	$scope.showPic = true;
    }


    $scope.addComment = function(sandwichIndex) {
    	$scope.sandwiches[sandwichIndex].comments.push($scope.sandwiches[sandwichIndex].addedComment)
    	$scope.sandwiches[sandwichIndex].addedComment = undefined
   	}


   	$scope.showByIngredient = false;
   	$scope.ingredientSelect = function (ingredientIndex, sandwichIndex) {
   		// console.log(ingredientIndex)
   		// console.log(sandwichIndex)
   		$scope.showByIngredient = true;
   		$scope.selectedIngredientSandwiches = []
   		var ingredient = $scope.sandwiches[sandwichIndex].ingredients[ingredientIndex]
   		

   		for (var i = 0; i < $scope.sandwiches.length; i++) {
   			for ( var j = 0; j < $scope.sandwiches[i].ingredients.length; j++)
		   		if ($scope.sandwiches[i].ingredients[j].toString().toLowerCase() === ingredient.toString().toLowerCase()) {
		   			$scope.selectedIngredientSandwiches.push($scope.sandwiches[i])
		   		}
   		}

   		// console.log(ingredient)
   		// console.log($scope.selectedIngredientSandwiches)
   		$scope.selectedIngredientName = ingredient

   	}
   	$scope.close = function() {
   	$scope.showByIngredient = false;

   	}

 
    



}

angular.module('sandwichApp').controller('sandwichController', ['$scope', sandwichControllerFunc])