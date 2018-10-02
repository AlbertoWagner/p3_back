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

TaskModels.prototype.usuarioExiste = function(user,callback){
    console.log(user.keys);
    console.log('user');
    user_name =user['user_name'];
    password =user['password'];

    console.log(user_name);
    console.log('user');


    this._connection.query('SELECT * from users  WHERE user_name = ?   ',user_name, (err, res) => {
        console.log(err, res, res); // deve dar null, [], 0
        if (res.length == 0){
            // this._connection.query('SELECT * FROM task', callback);
        }else{
            this._connection.query('SELECT * from users  WHERE password = ?   ',password, (err, res) => {
                console.log(err, res, res); // deve dar null, [], 0
                if (res.length != 0){
                    this._connection.query('SELECT * FROM task', callback);
                }else{
                    this._connection.query(callback);
                }
            });
        }
});




};


TaskModels.prototype.salvarUser = function(user, callback){
    console.log(user);
    this._connection.query('INSERT INTO users SET ?', user, callback);
};

module.exports = function(){
    return TaskModels;
};