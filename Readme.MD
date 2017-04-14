# Modular Javascript Facebook Application

This is a JavaScript application that uses Facebook API, a tutorial that covers the **JavaScript Object Literal Pattern** for web developers. This pattern is also mentioned in Addy Osmany e-book (https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript) .
The Object Literal is the simplest modular pattern, it's encapsulating all the module's functionality into one object.

Example of **JavaScript Object Literal Pattern**:

    var module = {
        a : "",
        method : function () {},
        meta : { }
    };

There is a downside of this pattern, the data from the modules is exposed. To handle this I used the **Revealing Module Pattern**. A revealing module is a self-executing anonymous function also known as an IIFE (immediately invoked function expression).

Example of **Revealing Module Pattern**:

    var MyFunction = function(){

        var _ = {
            Init: function(){
                _.Config.foo = "hello world";
            },
            Config:{
                foo:null
            },
            ShowAlert:function(){
                alert(_.Config.foo);
            }
        }

        return {
            Init: _.Init,
            ShowAlert: _.ShowAlert
        };
    }();

    MyFunction.Init();
    MyFunction.ShowAlert();

With this we can run a function that returns the module's value. If we return an object of methods, those methods are public and other modules has access to. The main advantage is that we can create a lot of variables / functionality and other modules does not have access to them unless we expose them via the return object.

In order to run this application you must have `npm` and `gulp` installed on your local machine.

1. Clone the project on any local or online server (apache).
2. Run the following commands:
    ```
    npm install
    gulp
    ```
3. Create a facebook application on developers.facebook.com and get an appID.
4. Set the Canvas URL on your Facebook Application (https://developers.facebook.com/apps/YOUR_APP_ID/settings/) as localhost or your online server. 
5. Replace `YOUR_APP_ID` with your developer appID from `index.html`.
6. Open http://yourServer/index.html in any browser

After login the application should look like:

![](http://i.imgur.com/mhXCBod.jpg)

## Conclusion

If you’ve stepped through the code examples in this repo, you should have a basic understanding of the object literal pattern and how it might prove useful to you as you develop more complex features and interactions. I encourage you to give this pattern a try the next time you find yourself writing more than a few lines of JavaScript — it forces you to think through the elements and behaviors that make up a complex feature or interaction. 