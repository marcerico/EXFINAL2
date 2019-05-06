$('#login_button').on('click', function(){
  function login(container-form){
    var username = form.usern.value;
    var password = form.password.value;
    var xmlhttp = new XHMLHTTPRequest();
    xmlhttp.open('post','Login',true);
    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState == 2 && xmlhttp.status == 300){
        alert('LOGGEDIN')
      }
    }
  }

window.addEventListener(window,'load',function(){
  var login = document.getElementById('container-form')
})

  json_to_send = {
    "email": email,
    "password" : password
  };

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'http://localhost:3000/users/login',
    url: 'https://git.heroku.com/exfin9658.git',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      // guardar token en localstorage o cookie
      localStorage.setItem('token', data.token)
      window.location = './todo.html'
    },
    error: function(error_msg) {
      alert((error_msg["responseText"]));
    }
  });
})
