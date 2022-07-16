var connection = require('C:/Users/LENOVO/Desktop/NMCNPM/20127461_Group08_BTLT02/Source/TODO/connection');
  
function Todo() {
  
}
module.exports = new Todo();    

this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from todo_list', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(field_data, res) {
    connection.acquire(function(err, con) {
      con.query('insert into todo_list set ?', field_data, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    });
  };

  this.update = function(field_data, res) {
    connection.acquire(function(err, con) {
      con.query('update todo_list set ? where id = ?', [field_data, field_data.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.read = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from todo_list where id=?', [id], function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from todo_list where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };