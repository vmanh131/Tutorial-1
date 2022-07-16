var todo = require('./Models/todo').default;
  
module.exports = {
  configure: function(app) {
    app.get('/todo/', function(req, res) {
      todo.get(res);
    });
     
    app.get('/todo/read/:id/', function(req, res) {
      todo.read(res);
    });
 
    app.post('/todo/create', function(req, res) {
      todo.create(req.body, res);
    });
  
    app.put('/todo/update', function(req, res) {
      todo.update(req.body, res);
    });
  
    app.delete('/todo/delete/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });
  }
};