angular.module('authService', [])

.factory('AuthService', function($http, $location, SessionService){
	var headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
    var cacheSession = function() {
    	SessionService.set('authenticated', true);
    }
    var uncacheSession = function() {
    	SessionService.unset('authenticated');
    }
	return {
		login: function(credentials) {
			var login = $http({
				url: "http://localhost:8000/api/login",
				method: "POST",
				headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
				data: {email : credentials.email,
						password: credentials.password}
			});
			login.success(cacheSession);
			return login;
			// return $http.post("http://localhost:8000/api/login", credentials);
		},
		logout: function() {
			var logout = $http.get("http://localhost:8000/api/logout");
			logout.success(uncacheSession);
			return logout;
		},
		isLoggedIn: function() {
			return SessionService.get('authenticated');
		}
	};
})
.factory('SessionService', function(){
	return {
		get: function(key) {
			return sessionStorage.getItem(key);
		},
		set: function(key, value) {
			return sessionStorage.setItem(key, value);
		},
		unset: function(key) {
			return sessionStorage.removeItem(key);
		}
	}
})