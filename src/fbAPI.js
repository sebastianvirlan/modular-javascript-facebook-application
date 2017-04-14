/**
 * Created by sebastian.virlan on 1/9/2017.
 */

var fbAPI = {

    endPoints       : {
        taggableFriends : "/me/taggable_friends",
        friends         : "/me/friends",
        myFeed          : "/me/feed",
        me              : "/me"

    },
    permissions: 'email',
    friendList      : function (limit, success) {

        core.FbAPI(this.endPoints.taggableFriends, {limit: limit}, success);
    },
    friendCount     : function (success) {

        core.FbAPI(this.endPoints.friends, success);
    },
    me              : function (success) {

        core.FbAPI(this.endPoints.me, success);
    },
    graph           : function (id, success) {

        core.FbAPI('/' + id, success);
    },
    postToMe        : function (message, success) {

        core.FbAPI(this.endPoints.myFeed, 'POST', {"message": message}, success);
    },
    login           : function (success) {

        FB.login(success, {scope: this.permissions});
    },
    postUI          : function (params, success) {

        FB.ui(params, function(response){

            if(response && !response.error_message)
            {
                if(typeof success === 'function')
                    success(response)
            }else{
                console.log(response.error_message);
            }
        });
    },
    setPermissions(permissions) {
        this.permissions = permissions;
    }
};