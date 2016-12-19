document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);

  
});

function addItemTodo(text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  list.appendChild(item);
}