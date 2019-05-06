var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}

var todos = document.querySelectorAll("input[type=checkbox]");

function updateTodo(id, completed) {
  // revisen si completed es booleano o string
  json_to_send = {
    "completed" : completed
  };
  json_to_send = JSON.stringify(json_to_send);
  $.ajax({
      url: 'http://localhost:3000/todos/' + id,
      url: 'https://git.heroku.com/exfin9658.git',
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'PATCH',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log("UPDATE!!")
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
}


function loadTodos() {
  $.ajax({
    url: 'http://localhost:3000/todos',
    url: 'https://git.heroku.com/exfin9658.git',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      for( let i = 0; i < data.length; i++) {
        function addItem(){
          var ul = document.getElementById("ul");
          var li = document.createElement("li");

          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = 1;
          checkbox.name = "todo[]";

          li.appendChild(checkbox);
          var text = document.getElementById("newitem");
          li.appendChild(document.createTextNode(text.value));
          ul.appendChild(li);
        }

        var button = document.getElementById("add");
        button.onclick = addItem;

        console.log(data[i].description)
        // algo asi:
        // addTodo(data[i]._id, data[i].description, data[i].completed)
      }
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });
}

loadTodos()



var input = document.querySelector("input[name=newitem]");

input.addEventListener('keypress', function (event) {
  if (event.charCode === 13) {
    json_to_send = {
      "description" : input.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'http://localhost:3000/todos',
      // url: 'https://tuapp.herokuapp.com/todos',
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)

      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    input.value = '';
  }
})

function addTodo(id, todoText, completed) {

}
