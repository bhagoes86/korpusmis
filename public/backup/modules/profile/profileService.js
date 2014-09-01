angular.module('profileService', [])

	.factory('ProfileService', function($http) {

		return {
			get : function() {
				return $http.get('/api/user');
			},
			show : function(option, id) {
				return $http.get('/api/'+option+'/' + id);
			},
			save : function(commentData) {
				return $http({
					method: 'POST',
					url: '/api/user',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(commentData)
				});
			},
			destroy : function(id) {
				return $http.delete('/api/user/' + id);
			}
		}

	});