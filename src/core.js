/**
 * Created by sebastian.virlan on 4/13/2017.
 */


var core = {

    FBinit  : function (appID, closure) {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : appID,
                cookie     : true,
                xfbml      : true,
                version    : 'v2.8',
                oauth: true,
                status: true
            });

            FB.getLoginStatus(closure);

        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },
    
    FbAPI   : function (endpoint) {

        var args = [].slice.call(arguments, 1);

        var
            type    = typeof args[0] === 'string' ? args.shift() : 'GET',
            params  = typeof args[0] === 'object' ? args.shift() : {},
            success = args.shift(),
            error   = args.shift();

        FB.api(
            endpoint,
            type,
            params,
            function (response) {

                if (response && !response.error) {
                    /* handle the result */
                    if(typeof success === 'function')
                        success(response);
                }

                if (response && response.error) {
                    console.log(response.error);
                    /* handle the result */
                    if(typeof error === 'function')
                        error(response);
                }
            }
        );

    }
};