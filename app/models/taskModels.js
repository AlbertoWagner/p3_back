function TaskModels(connection){
    this._connection = connection;



        var sql = "CREATE TABLE IF NOT EXISTS `users` (\n"+
        "`id` int(5) NOT NULL AUTO_INCREMENT,\n"+
        "`first_name` text NOT NULL,\n"+
        "`last_name` text NOT NULL,\n"+
        "`mob_no` int(11) NOT NULL,\n"+
        "`user_name` varchar(20) NOT NULL,\n"+
        "`password` varchar(15) NOT NULL,\n"+
        "PRIMARY KEY (`id`)\n"+ ");";

    connection.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log('criou a tabela!');
        });

    var sql2 = "CREATE TABLE IF NOT EXISTS `task` (\n"+
        "`id_task`  int NOT NULL AUTO_INCREMENT,\n"+
        "`descricao` varchar(100),\n"+
        "`data_inicio` timestamp default current_timestamp,\n"+
        "`data_fim` timestamp default current_timestamp,\n"+
        "PRIMARY KEY (`id_task`)\n"+ ");";

    connection.query(sql2, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
    });


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