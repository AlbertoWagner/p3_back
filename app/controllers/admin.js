module.exports.formulario_inclusao_task = function(application, req, res){
    res.render('admin/form_add_noticia', { validacao : {}, task : {} });
};

module.exports.task_salvar = function(application, req, res){
    var task = req.body;
    req.assert('descricao', 'Descrição é obrigatório').notEmpty();
    req.assert('data_inicio', 'Data é obrigatório').notEmpty();
    req.assert('data_fim', 'Data é obrigatório').notEmpty();
    var erros = req.validationErrors();
    if(erros){
        res.render('admin/form_add_noticia', {validacao: erros,  task: task});
        // retornando post
        res.json({ message: "Anúncio atualizado.", anuncio });

        return;
    }

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

