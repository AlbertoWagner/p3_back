var app = require('./config/server');
var rotaNoticias =  require('./app/routes/noticias');
rotaNoticias(app);
var rotaHome = require('./app/routes/home');
rotaHome(app);
var rotaFormmularioInclusaoNoticia = require('./app/routes/formmulario_inclusao_noticia');
rotaFormmularioInclusaoNoticia(app);




app.listen(3000,function () {
    console.log("ON");

});
