function TaskModels(connection){
    this._connection = connection;
}

TaskModels.prototype.getTasks = function(callback){
    this._connection.query('SELECT * FROM task', callback);
};

TaskModels.prototype.getTask = function(id, callback){
    this._connection.query('SELECT * FROM task WHERE id_task = ?',id, callback);
};

TaskModels.prototype.salvarTask = function(task, callback){
    console.log(task);
    this._connection.query('INSERT INTO task SET ?', task, callback);
};

TaskModels.prototype.deletarTask = function(id, callback){
    console.log(id);
    this._connection.query('DELETE  FROM  task WHERE id_task = ?', id);
    this._connection.query('SELECT * FROM task', callback);

};

module.exports = function(){
    return TaskModels;
};