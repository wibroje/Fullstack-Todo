const db = require('./models');

const todo_list = [
{title: 'Get Jerry a birthday gift', date: 'April 4'},
{title: 'Help grandma solve world hunger', date: 'Forever'},
{title: 'Go down to the old shop and have a look around', date: 'Whenever'}
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