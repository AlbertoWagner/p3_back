module.exports = function(application){
    application.post('/login', function(req,res){
        application.app.controllers.user.existe_user(application,req,res);
    });

};