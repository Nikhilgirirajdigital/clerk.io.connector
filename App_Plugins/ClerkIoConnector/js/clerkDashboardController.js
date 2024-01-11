/*
 *  Clerk Dashboard Controller 06.11.2023
 *  Copyright (c) 2023 Clerk.Io All Rights Reserved.
 */

angular.module('umbraco').controller('ClerkDashboardController', function ($scope, $http) {
    document.title = "Clerk.io";
    $scope.Init = function () {
        $scope.GetRecentLogs();
    }

    $scope.GetRecentLogs = function () {
        $scope.Load = true;
        $http.get('/umbraco/backoffice/api/clerkdashboard/getrecentlogs')
            .then(function (response) {                
                $scope.Logs = response.data;
            }).finally(function () {
                $scope.Load = false;
            });
    }
});