'use strict';

/**************************************************************************

  * Service

  *************************************************************************/

// ReSharper disable once InconsistentNaming
shapeApp.factory("utilservice", ['$http','$log',
    function ($http,$log) {
        return {

            httpGetRequest: function (urlWithRequestVariables, errorMessage) {
                var d = $.Deferred();
                $http.get("https://localhost:44366/" + urlWithRequestVariables)
                    .then(function (data) {
                        d.resolve(data.data);
                    })
                    .catch(function (data, status) {
                        $log.error(data);
                        d.reject(status);
                    });
                return d.promise();
            },
            httpPostRequest: function (requestObj, url, errorMessage) {
                var d = $.Deferred();
                $http.post("https://localhost:44366/" + url, requestObj)
                    .then(function (data) {
                        d.resolve(data.data);
                    })
                    .catch(function (data, status) {
                        $log.error(data);
                        d.reject(errorMessage);
                    });
                return d.promise();
            },
            getAccessToken: function (requestObj, url, errorMessage) {
                var d = $.Deferred();
                var config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
                $http.post("https://localhost:44366/" + url, requestObj,config)
                    .then(function (data) {
                        d.resolve(data.data);
                    })
                    .catch(function (data, status) {
                        $log.error(data);
                        d.reject(errorMessage);
                    });
                return d.promise();
            }
        }
    }]);