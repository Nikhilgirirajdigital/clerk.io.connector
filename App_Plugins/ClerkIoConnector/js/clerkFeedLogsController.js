/*
 *  Clerk Dashboard Controller 06.11.2023
 *  Copyright (c) 2023 Clerk.Io All Rights Reserved.
 */

angular.module('umbraco').controller('ClerkFeedLogsController', function ($scope, $http) {
    document.title = "Clerk.io";
    $scope.FilterData = {        
        PageNumber: 1,
        PageSize: 20
    };
    $scope.Init = function () {
        $scope.GetAllLogs();
    }

    $scope.pagination = {
        pageIndex: 0,
        pageNumber: 1,
        totalPages: 1,
        pageSize: 20
    };

    $scope.GetAllLogs = function () {
        $scope.Load = true;        
        $http.post('/umbraco/backoffice/api/clerkdashboard/getalllogs', $scope.FilterData)
            .then(function (response) {                
                $scope.LogResponse = response.data;
                $scope.pagination.pageNumber = $scope.LogResponse.pageNumber;
                $scope.pagination.totalPages = $scope.LogResponse.totalPages;
            }).finally(function () {
                $scope.Load = false;
            });
    }

    $scope.FilterLogs = function () {
        $scope.pagination = {
            pageIndex: 0,
            pageNumber: 1,
            totalPages: 1,
            pageSize: 20
        };
        $scope.FilterData.PageNumber = 1;
        $scope.GetAllLogs();
    }

    $scope.goToPage = goToPage;

    function goToPage(pageNumber) {        
        $scope.pagination.pageIndex = pageNumber - 1;
        $scope.pagination.pageNumber = pageNumber;
        $scope.FilterData.PageNumber = pageNumber;
        $scope.GetAllLogs();
    }
});