'use strict';

/**************************************************************************

  * Service for looking up and saving data from studyBox service.

  *************************************************************************/

// ReSharper disable once InconsistentNaming
shapeApp.factory("datafactory",
    function () {
        this.shapeAppData = {
            errorMessages: [],
            user:""

            //// Reepay related configurations
            //reepayCheckOutResponse: {},
            //customer: "", // Handel for existing customers to add payment methods
            //create_customer: { // Handle for creating new customers
            //    address: "Al-Rehman Plaza G-11 Marakaz",
            //    address2: "Al-Rehman Plaza G-11 Marakaz",
            //    city: "Islamabad"
            //},
            //reepaySessionResponse: {
            //    id: "",
            //    url: ""
            //},
            //signInSignUpPromise: null,
            //currentUser: null,
            //subscriptionPlan: "plan-9b7bc",
            //subscription: null,
            //signUpMethods: {
            //    SOURCE: "source",
            //    EMAIL: "email",
            //    LINK: "link"
            //},
            //authToken: ""
        };
        return this.shapeAppData;
    }
);