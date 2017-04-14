/**
 * Created by sebastian.virlan on 1/9/2017.
 */

var FBapplication = function() {

    return {
        init: function (appID, permissions) {

            //check if jQuery exists
            if (!window.jQuery) return alert(lang.jqueryRequired);

            //set params
            if (appID === undefined) return alert(lang.appIDRequired);
            if (permissions !== undefined) fbAPI.setPermissions(permissions);

            //load facebook library
            core.FBinit(appID, callBacks.statusChange);

        }
    }
}();