'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('rev', function() {
    return function(input, uppercase, lowercase) {
      var out = input.split("").reverse().join("");
      return out;
    }
  });
