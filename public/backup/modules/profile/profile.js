var profile_module =  angular.module('profile', ['profileService']);

profile_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home.profile', {
			url: '/profile',
			templateUrl: 'modules/profile/profile.html',
			controller: 'profileController',
			title: 'Profile'
		});
});

profile_module.controller('profileController', function($scope, $http, ProfileService) {
	$scope.profileDate = {};
	$scope.loading = true;
		
		// get all the comments first and bind it to the $scope.comments object
		ProfileService.show('user','1')
			.success(function(data) {
				$scope.user = data;
				$scope.loading = false;
			});
		ProfileService.show('award','1')
			.success(function(data) {
				$scope.awards = data;
				// $scope.loading = false;
			});

		// function to handle submitting the form
		$scope.submitComment = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			Comment.save($scope.commentData)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});

				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a comment
		$scope.deleteComment = function(id) {
			$scope.loading = true; 

			Comment.destroy(id)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});

				});
		};

});


