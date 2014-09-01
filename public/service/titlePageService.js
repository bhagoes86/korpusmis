var titlePage_module =  angular.module('titlePage', []);

titlePage_module.factory('titlePage', function() {
   var title = 'Koran Kampus';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle }
   };
});