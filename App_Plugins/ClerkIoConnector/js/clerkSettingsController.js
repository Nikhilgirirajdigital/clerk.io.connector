/*
 *  Clerk Dashboard Controller 06.11.2023
 *  Copyright (c) 2023 Clerk.Io All Rights Reserved.
 */

angular.module('umbraco').controller('ClerkSettingsController', function ($scope, $http, notificationsService) {

    document.title = "Clerk.io";

    /* General */

    $scope.Init = function () {
        $scope.GetConfigurationData();
        $scope.LoadDocumentTypes();
    }

    $scope.GetConfigurationData = function () {
        $scope.Load = true;
        $http.get('/umbraco/backoffice/api/clerkdashboard/getconfigurationdata')
            .then(function (response) {
                $scope.Configuration = response.data;
                if ($scope.Configuration.productConfiguration.documentType != null && $scope.Configuration.productConfiguration.documentType != '') {
                    $scope.LoadFieldsByDocumentTypeForProduct($scope.Configuration.productConfiguration.documentType)
                }
                if ($scope.Configuration.categoriesConfiguration.documentType != null && $scope.Configuration.categoriesConfiguration.documentType != '') {
                    $scope.LoadFieldsByDocumentTypeForCategory($scope.Configuration.categoriesConfiguration.documentType)
                }
            }).finally(function () {
                $scope.Load = false;
            });
    }
    $scope.SaveConfiguration = function (configurationForm) {        
        if (configurationForm == undefined || configurationForm.$invalid) {
            return;
        } else {
            $scope.Load = true;
            
            let productFlag = false, categoryFlag = false, pageFlag = false, isError = false;
            $scope.Configuration.productConfiguration.dictionary.forEach(async (item) => {                
                if (item.key.length === 0 || (item.value === null || item.value.length === 0)) {
                    productFlag = true;
                    isError = true;
                }
            });
            $scope.Configuration.categoriesConfiguration.dictionary.forEach(async (item) => {
                if (item.key.length === 0 || (item.value === null || item.value.length === 0)) {
                    categoryFlag = true;
                    isError = true;
                }
            });
            $scope.Configuration.pagesConfiguration.dictionary.forEach(async (item) => {
                if (item.key.length === 0 || item.value.length === 0) {
                    pageFlag = true;
                    isError = true;
                }
            });

            if (productFlag) {
                notificationsService.error("Product configuration details are required.");                
            }

            if (categoryFlag) {
                notificationsService.error("Category configuration details are required.");
            }

            if (pageFlag) {
                notificationsService.error("Page configuration details are required.");
            }

            if (isError) {                
                $scope.Load = false;
                return;
            }

            $http.post('/umbraco/backoffice/api/clerkdashboard/saveconfiguration', $scope.Configuration)
                .then(function (response) {
                    if (response.data == true) {
                        notificationsService.success("Configuration saved successfully.");
                        $scope.Init();
                    }
                    else {
                        notificationsService.error('Somethings went wrong. Please try again.');
                    }
                }).finally(function () {
                    $scope.Load = false;
                });
        }
    }

    $scope.LoadDocumentTypes = function () {
        $scope.Load = true;
        $http.get('/umbraco/backoffice/api/clerkdashboard/getdocumenttypes')
            .then(function (response) {
                $scope.DocumentTypes = response.data;
            }).finally(function () {
                $scope.Load = false;
            });
    }


    /* Products */

    $scope.removeFromProduct = function (index) {
        if ($scope.Configuration.productConfiguration.dictionary.length == 1) {
            notificationsService.warning('Atleast one property configuration is required.');
        }
        else {
            if (confirm("Are you sure to you want to delete?")) {
                $scope.Configuration.productConfiguration.dictionary.splice(index, 1);
            }
        }
    }

    $scope.addFromProduct = function () {
        $scope.Configuration.productConfiguration.dictionary.push({ key: "", value: "" });
    }

    $scope.LoadProductDocumentTypeFields = function (ele) {
        $scope.LoadFieldsByDocumentTypeForProduct(ele.Configuration.productConfiguration.documentType);
    }

    $scope.LoadFieldsByDocumentTypeForProduct = function (documentTypeAlias) {
        $scope.Load = true;
        $http.get(`/umbraco/backoffice/api/clerkdashboard/getdocumenttypeproperties?alias=${documentTypeAlias}`)
            .then(function (response) {
                $scope.ProductDocumentTypeFields = response.data;
            }).finally(function () {
                $scope.Load = false;
            });
    }    

    /* Category */

    $scope.removeFromCategory = function (index) {
        if ($scope.Configuration.categoriesConfiguration.dictionary.length == 1) {
            notificationsService.warning('Atleast one property configuration is required.');
        }
        else {
            if (confirm("Are you sure to you want to delete?")) {
                $scope.Configuration.categoriesConfiguration.dictionary.splice(index, 1);
            }
        }
    }

    $scope.addFromCategory = function () {
        $scope.Configuration.categoriesConfiguration.dictionary.push({ key: "", value: "" });
    }

    $scope.LoadCategoryDocumentTypeFields = function (ele) {
        $scope.LoadFieldsByDocumentTypeForCategory(ele.Configuration.categoriesConfiguration.documentType);
    }

    $scope.LoadFieldsByDocumentTypeForCategory = function (documentTypeAlias) {
        $scope.Load = true;
        $http.get(`/umbraco/backoffice/api/clerkdashboard/getdocumenttypeproperties?alias=${documentTypeAlias}`)
            .then(function (response) {
                $scope.CategoryDocumentTypeFields = response.data;
            }).finally(function () {
                $scope.Load = false;
            });
    }
    
    /* Pages */

    $scope.removeFromPage = function (index) {
        if ($scope.Configuration.pagesConfiguration.dictionary.length == 1) {
            notificationsService.warning('Atleast one property configuration is required.');
        }
        else {
            if (confirm("Are you sure to you want to delete?")) {
                $scope.Configuration.pagesConfiguration.dictionary.splice(index, 1);
            }
        }
    }

    $scope.addFromPage = function () {
        $scope.Configuration.pagesConfiguration.dictionary.push({ key: "", value: "" });
    }
    
});