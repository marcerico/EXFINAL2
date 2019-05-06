
$('#signup_button').on('click', function(){
    $document.ready(function(){
    $("signup_option").signup_button(function(event){
      event.preventDefault()
      var password = $("password").val();
      var email =  $("email").val();
      var name = $("password").val();
      var age = $("age").val();
    })
  })
  json_to_send = {
    "password" : password,
    "email": email,
    "name": name,
    "age": age
  };
  

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
 url: 'http://localhost:3000/users',
 url: 'https://git.heroku.com/exfin9658.git',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Usuario creado con exito");
      console.log('success: '+ data);
      window.location = './index.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});
