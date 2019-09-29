module.exports = function(app){
  app.get('/formulario',function(req, res){
    res.render("admin/formulario");
  });

  app.post('/noticias/save',function(req, res){
    var news = req.body;
    res.send(news)
  });
}
