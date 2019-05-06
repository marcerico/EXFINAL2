
function login(){
  var username = document.getElementById('usern').value;
  var password = document.getElementById('password').value;

  if(user = '' || password = ''){
    alert("Please Complete Your Login (ALL FIELDS");
  }
  else{
    $.ajax({
      type : 'POST',
      url : 'https://git.heroku.com/exfin9658.git',
    })
  }
}


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
