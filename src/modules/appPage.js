/**
 * Created by sebastian.virlan on 4/14/2017.
 */

var appPage = function() {

    var _domEl = function() {

        var dom = {};

        dom.$app             = $('.app');
        dom.$postButton      = dom.$app.find('#post');
        dom.$textareaMessage = dom.$app.find('#postMessage');
        dom.$postFBUIButton  = dom.$app.find('#postUsingUI');
        dom.$spanName        = dom.$app.find('.meName');
        dom.$friendName      = dom.$app.find('.friendName');
        dom.$friendPicture   = dom.$app.find('.friendPicture');

        return dom;
        
    }();

    var _events = function(){

        var eventActions = {

            doFormPost  : function (event) {
                event.preventDefault();
                    
                fbAPI.postToMe(_domEl.$textareaMessage.val(), function (response) {
                    _domEl.$textareaMessage.val('');
                    alert("Post with ID" + response.id);
                });
            },
            doUIPost    : function (event) {
                fbAPI.postUI({
                    //to: 100000226269386,
                    method: 'feed',
                    caption: 'An example caption',
                    link: 'https://stackoverflow.com'
                }, function(response){
                    alert('Success');
                });
            }
        };

        var uiEvents = {
            
            postUIButtonEvent: function () {
                    //debugger

                    _domEl.$postFBUIButton.unbind('click').on('click', eventActions.doUIPost);
            },
            postFormSubmit: function () {

                    _domEl.$postButton.unbind('submit').on('submit', eventActions.doFormPost);
            }
        };

        return {
            load: function() {
            
                uiEvents.postUIButtonEvent();
                uiEvents.postFormSubmit();
            }
        }
    }();


    var _functions = {

        showApp: function() {
            _domEl.$app.show();
        },
        hideApp: function() {
            _domEl.$app.hide();
        },
        generateRandomBetween: function (min, max) {
            return Math.floor(Math.random() * max) + min;
        },
        selectRandomFriend: function (friends) {
            return friends[this.generateRandomBetween(1, friends.length)];
        },
        getPhotoIDFromPhotoURL: function (photoURL) {

            var matches = photoURL.match("[^_]+_([0-9]+)_.*");

            return matches[1];
        },
        printMyDetails: function (api) {
            _domEl.$spanName.text(api.me.name);
        },
        printFriendDetails: function (api) {

            _domEl.$friendName.text(api.name);
            _domEl.$friendPicture.attr('src', api.picture.data.url);
            _domEl.$friendPicture.attr('photo-id', this.getPhotoIDFromPhotoURL(api.picture.data.url));

        },
        initApiCalls: function (obj) {

            // we need 2 api calls to get a random friend, one for getting the total number of friends and one for
            // getting all the friends, and to be sure for the second call that the first was successfully we make
            // a promise for each call

            var friendsCount = 0;

            var friendCount = new Promise(function (resolve, reject) {
                fbAPI.friendCount(function (response) {
                    if(response.summary !== /**@type String*/'') {
                        friendsCount = response.summary.total_count;
                        resolve({friendCount: response});
                    }
                });
            });

            friendCount.then(function (a) {
                var friendList = new Promise(function (resolve, reject) {
                    fbAPI.friendList(friendsCount, function (response) {
                        resolve({friendList: response});
                    });
                });
                friendList.then(obj.friendListPromise);
            });


            var me = new Promise(function (resolve, reject) {
                fbAPI.me(function (response) {
                    resolve({me: response});
                });
            });

            me.then(obj.mePromise);
        }
    };

    return {

        render: function() {

            _events.load();
            _functions.showApp();
            _functions.initApiCalls({
                friendListPromise: function (apiResponse) {
                    _functions.printFriendDetails(_functions.selectRandomFriend(apiResponse.friendList.data));
                },
                mePromise: function (apiResponse) {
                    _functions.printMyDetails(apiResponse);
                }
            });
        }
    }
}();