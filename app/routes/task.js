

module.exports = function(application){

    application.get('/tasks', function(req,res){
        application.app.controllers.task.tasks(application,req,res);
    });
    application.get('/task/:id', function(req,res){
        application.app.controllers.task.mosta_task(application,req,res);
    });
    application.delete('/task_deletar/:id', function(req,res){
        application.app.controllers.task.deletar_task(application,req,res);
    });
};