angular.module('apiRequestService', [])

	.factory('ApiRequestService', function($http) {
		var headers = {
                'Access-Control-Request-Methods': 'GET, POST'
        };
		return {
			get : function(option) {
				return $http({
					url :'http://localhost:8000/api/'+option,
					method: 'GET',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
				});
			},
			// .get('http://localhost:8000/api/user/' + id);
			show : function(option, id) {
				return $http({
					url: 'http://localhost:8000/api/'+option+'/' + id,
					method: 'GET',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
				});
			},
			save : function(option, commentData) {
				return $http({
					method: 'POST',
					url: 'http://localhost:8000/api/'+option,
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(commentData)
				});
			},
			destroy : function(id) {
				return $http.delete('/api/user/' + id);
			}
		}

	});