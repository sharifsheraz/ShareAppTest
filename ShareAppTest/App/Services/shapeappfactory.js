shapeApp.factory("shapeappservice", ["datafactory","utilservice", function(datafactory,utilservice) {
    return {
        registerUser: function(email, password, confirmPassword) {
            const requestObj = {
                "Email": email,
                "Password": password,
                "ConfirmPassword":confirmPassword
            };
            return utilservice.httpPostRequest(requestObj, "/api/Account/Register", "Request Failed");
        },
        login: function(email, password) {
            const requestObj = {
                grant_type: 'password',
                "Email": email,
                "Password": password
            };
            return utilservice.getAccessToken(requestObj, "Token", "Request Failed");
        }
    }
}]);