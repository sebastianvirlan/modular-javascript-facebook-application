/**
 * Created by sebastian.virlan on 1/6/2017.
 */

var callBacks = {

    statusChange: function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().

        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            appPage.render();
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            loginPage.render();
        }
    }
};