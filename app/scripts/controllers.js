'use strict';

angular.module('testForFE')

.controller('HomeController', ['$scope', 'mainFactory', function($scope, mainFactory) {
	$scope.articles = mainFactory.getArticles().query(
		function(response) {
			$scope.articles = response;
		},
		function(response) {
			alert("Error: "+response.status + " " + response.statusText);
		});
}])

.controller('ArticleController', ['$scope', '$stateParams', 'mainFactory', function($scope, $stateParams, mainFactory) {
	$scope.message = "";
	
	$scope.article = mainFactory.getArticles().get({id:parseInt($stateParams.id,10)})
	.$promise.then(
		function(response){
			$scope.article = response;
		},
		function(response) {
			alert("Error: "+response.status + " " + response.statusText);
		}
		);

	$scope.articles = mainFactory.getArticles().query(
		function(response) {
			$scope.articles = response;
		},
		function(response) {
			alert("Error: "+response.status + " " + response.statusText);
		});
}])


.controller('HeaderController', ['$scope', 'mainFactory', function($scope, mainFactory) {
	$scope.message = "";
	
	$scope.categories = mainFactory.getCategories().query(
		function(response) {
			$scope.categories = response;
		},
		function(response) {
			alert("Error: "+response.status + " " + response.statusText);
		});

	$scope.filters = {};
	$scope.tab = 0;
	$scope.selectCategory = function (choosedCategoryID) {
		$scope.filters.categoryID=choosedCategoryID;
		$scope.tab = choosedCategoryID;
	};

	$scope.isSelected = function (choosedCategoryID) {
		return $scope.tab == choosedCategoryID;
	};

	$scope.resetCategory = function () {
		$scope.filters = {};
		$scope.tab = 0;
	};
}])
;
