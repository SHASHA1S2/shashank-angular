'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
  filter('rev', function() {
    return function(input, uppercase, lowercase) {
      var out = input.split("").reverse().join("");
      return out;
    }
  });
