'use strict';

import {BooleanParser} from './boolparser.js';
import angular from 'angular';

/**
 * The main app module
 * @type {angular.Module}
 */
let app = angular.module('app', []);


/**
 * The main controller
 */
app.controller('Parser', ['$scope', function ( $scope ) {
	$scope.exp = '';

	$scope.$watch(function () {

	});
}]);


let parse = function (exp, args) {
	let parser = new BooleanParser(exp, args);
	return parser.parse().eval();
};
