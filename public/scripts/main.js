
var $itemList;
var allItems = [];

$(document).ready(function(){

	$itemList = $('#listTarget');
		$.ajax({
	    method: 'GET',
	    url: '/api/list',
	    success: itemSuccess,
	    error: itemError
  });
});		

$('#list-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/list',
      data: $(this).serialize(),
      success: newItemSuccess,
      error: newItemError
    });
  });

$itemList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button');
    $.ajax({
      method: 'DELETE',
      url: '/api/books/'+$(this).attr('data-id'),
      success: window.location.href='/',
      error: deleteItemError
    });
  });

		function getItemHtml(item) {
  return `<hr>
          <p>
            <b>${item.task}</b>
            <button type="button" name="button" class="deleteBtn btn btn-warning pull-right" data-id=${item._id}>DONE</button>
          </p>`;
}

function getAllItemsHtml(items) {
  return items.map(getItemHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render() {
  // empty existing posts from view
  $itemList.empty();

  // pass `allBooks` into the template function
  var itemsHtml = getAllItemsHtml(allItems);

  // append html to the view
  $itemList.append(itemsHtml);
};

function itemSuccess(json) {
  allItems = json;
  render();

}

function itemError(err){
	console.log('Error, dummy!')
}

function newItemSuccess(json) {
  $('#list-form input').val('');
  allItems.push(json);
  render();
  window.location.href="/";
}

function newItemError() {
  console.log('You suck at full stack!');
}

function deleteItemError() {
  console.log('Still gonna send it');
}

