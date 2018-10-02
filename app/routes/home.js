
module.exports = function(application){
    application.get('/',function (req,res) {
        var message = '';
        message = 'Wrong Credentials.';
        res.render('home/index',{message: message});
    });
};

