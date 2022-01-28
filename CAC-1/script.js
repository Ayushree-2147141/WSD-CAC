function testname(event)
{
  let code=event.which;
  if(code>47&&code<58)  
    return false;
  else
    return true;
    
}


function validate()
{
  var fullname = document.getElementById('fullname');
  var address = document.getElementById('address');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var span = document.getElementsByTagName('span');

  if(fullname.value == "" || address.value == "" || email.value == "" || password.value == "")
  {
    
  }
}
    