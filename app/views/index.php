<!DOCTYPE html>
<html ng-app="amberApp">
<head>
	<title ng-bind="pageTitle"></title>
	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="icon" type="image/gif" href="images/animated_favicon1.gif">
	<!-- stylesheet loaded -->
	<link rel="stylesheet" href="css/style.min.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/ngProgress.css">
	<link rel="stylesheet" href="css/ng-tags-input.css">
	<link rel="stylesheet" href="css/macgyver.css">
	<link rel="stylesheet" href="css/toaster.css">
	<!-- vendor loaded -->
	<script src="vendor/jquery-1.11.1.js"></script>
	<script src="vendor/angular.js"></script>
	<script src="vendor/angular-route.js"></script>
    <script src="vendor/angular-ui-router.js" type="text/javascript"></script>
    <script src="vendor/highcharts.js"></script>
    <script src="vendor/highchart-ng.js"></script>
    <script src="vendor/underscore.js"></script>
    <script src="vendor/ngProgress.js"></script>
    <script src="vendor/twitter-timeline.js"></script>
    <script src="vendor/ng-tags-input.min.js"></script>
    <script src="vendor/macgyver.js"></script>
    <script src="vendor/spin.js"></script>
    <script src="vendor/angular-spinner.js"></script>
    <script src="vendor/toaster.js"></script>
    <script src="vendor/angular-animate.js"></script>
    <script src="vendor/angular-upload.js"></script>
    <script src="vendor/angular-breadcrumb.min.js"></script>
    <script src="vendor/ui-bootstrap-tpls-0.11.0.min.js"></script>
    <!-- service loaded -->
    <script src="service/apiRequestService.js"></script>
    <script src="service/authenticationService.js"></script>
    <!-- module loaded -->
	<script src="modules/main/script.js"></script>
	<script src="modules/statistics/statistics.js"></script>
	<script src="modules/profile/profile.js"></script>
	<script src="modules/portfolios/portfolios.js"></script>
	<script src="modules/tasks/tasks.js"></script>
	<script src="modules/events/events.js"></script>
	<script src="modules/absenceRecord/absenceRecord.js"></script>
	<script src="modules/scoringRecord/scoringRecord.js"></script>
	<script src="modules/home/home.js"></script>
	<script src="modules/login/login.js"></script>
	<script src="modules/addCrew/addCrew.js"></script>
</head>
<body ui-view>
</body>
</html>