module.exports.tasks = function(application, req, res){
    var connection = application.config.dbConnection();
    var taskModel = new application.app.models.taskModels(connection);
    taskModel.getTasks(function(error, result){
        res.render('noticias/noticias', { task : result });
    });
};


module.exports.mosta_task = function(application, req, res){
    var id = req.params.id;
    var connection = application.config.dbConnection();
    var taskModel = new application.app.models.taskModels(connection);
    taskModel.getTask(id,function(error, result){
        res.render("noticias/noticia", {task : result});
    });
};



module.exports.deletar_task = function(application, req, res){
    var id = req.params.id;
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.taskModels(connection);
    noticiasModel.deletarTask(id,function(error, result){
        res.render("noticias/noticias", {task : result});
    });
};
