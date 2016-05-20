'use strict';

angular.module('testForFE')
.constant("baseURL","http://localhost:3000/")
.service('mainFactory', ['$resource', 'baseURL', function($resource,baseURL) {
	this.getArticles = function(){
		return $resource(baseURL+"list-of-articles/:id",null,  {'update':{method:'PUT' }});
	};

	this.getCategories = function() {
		return $resource(baseURL+"list-of-categories/:id",null,  {'update':{method:'PUT' }});
	};
}]);
