module.exports = function(application){
    // app.get('/login', function(req,res){
    //
    //     res.render('home/index');
    // });
    application.post('/login', function(req,res){
        application.app.controllers.user.existe_user(application,req,res);
    });
//     application.get('/signup', function(req,res){
//     res.render('user/header');
// });
};