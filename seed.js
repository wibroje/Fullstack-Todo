var db = require('./models');

var todo_list = [
{task: 'Get Jerry a birthday gift'},
{task: 'Help grandma solve world hunger'},
{task: 'Go down to the old shop and have a look around'}
];

db.Todo.remove({}, function(err, items){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all items');

    
    db.Todo.create(todo_list, function(err, items){
      if (err) { return console.log('err', err); }
      console.log("created", items.length, "items");
      process.exit();
    });
  }
});