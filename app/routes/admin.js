module.exports = function(application){
    application.get('/formulario_inclusao_task', function(req,res) {
        application.app.controllers.admin.formulario_inclusao_task(application, req, res);
    });

    application.post('/task/salvar', function(req,res){
        application.app.controllers.admin.task_salvar(application, req, res);
    });
};