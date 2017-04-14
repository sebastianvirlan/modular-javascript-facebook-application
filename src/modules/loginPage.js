/**
 * Created by sebastian.virlan on 4/14/2017.
 */

var loginPage = function() {

    var _domEl = function() {

        var dom = {};

        dom.$login     = $('.login');
        dom.$loginCtn  = dom.$login.find('.login-container');

        return dom;
    }();

    var _events = function() {
        
         var eventActions = {

            loginClick: function (event) {

                fbAPI.login(function (response) {
                    if (response.authResponse) {
                        _functions.hideLogin();
                        appPage.render();
                    }
                });
            }
        };

        var uiEvents = {
            loginButtonEvent: function () {

                _domEl.$login.unbind('click').on('click', eventActions.loginClick);
            }
        };
        
        return {
            load: function() {
            
                uiEvents.loginButtonEvent();
            }
        }
    }();

    var _functions = {

        showLogin: function() {
            _domEl.$login.show();
        },
        hideLogin: function() {
            _domEl.$login.hide();
        }
    };

    return {

        render: function() {

            _events.load();
            _functions.showLogin();
        }
    }
}();
