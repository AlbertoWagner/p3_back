module.exports.existe_user = function(application, req, res){
    var user = req.body;

    var connection = application.config.dbConnection();
    var taskModel = new application.app.models.taskModels(connection);



    taskModel.usuarioExiste(user,function(error, result){
        console.log(result);
        if(result== undefined){
            var message = '';
            message = 'Usuario não existe';
            res.render('home/index',{message: message});
        }else{
            res.render('noticias/noticias', { task : result });
        }


    });
};