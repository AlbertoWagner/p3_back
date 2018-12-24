module.exports.formulario_inclusao_task = function(application, req, res){
    res.render('admin/form_add_noticia', { validacao : {}, task : {} });
};

module.exports.task_salvar = function(application, req, res){
    var task = req.body;
    var connection = application.config.dbConnection();
    var taskModel = new application.app.models.taskModels(connection);

    taskModel.salvarTask(task, function(error, result){
        res.redirect('/tasks');
    });
};


module.exports.formulario_inclusao_user = function(application, req, res){
    res.render('user/header', { validacao : {}, user : {} });
};

module.exports.salvar_user= function(application, req, res){
    var user = req.body;
    var connection = application.config.dbConnection();
    var taskModel = new application.app.models.taskModels(connection);
    taskModel.salvarUser(user, function(error, result){
        res.redirect('/');
    });
};

