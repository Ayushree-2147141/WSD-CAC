var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var span = document.getElementsByTagName('span')

function testname(event)
{
  let code=event.which;
  if(code>47&&code<58) 
  {
    span[0].innerText = "Numkey not allowed!";
    span[0].style.color = "red";
    return false;
  } 
    
  else
    return true;
    
}

function scrollToTop()
{
  window.scrollTo(0,0);
}

function validate()
{
  if(fullname.value == "" || email.value == "" || password.value == "")
  {
    scrollToTop();
    validateName();
  }
  else
  {
    window.open("./index.html","_self")
  }
}

function validateName()
{ 
  const regex = /^[(A-Za-z\s.)]+$/;
  if(fullname.value.trim() == "" || fullname.value.trim() == null)
  {
    span[0].innerText="Blank Space not allowed";
    span[0].style.color="red"; 
    fullname.style.border="2px red solid";
    validateEmail();
  }
  else if(regex.test(fullname.value.trim()))
  {
      span[0].innerText="Valid Name!";
      span[0].style.color="lime"; 
      fullname.style.border="2px lime solid";
      validateEmail();
  }
  else
  {
      span[0].innerText="Invalid Name!";
      span[0].style.color="red";
      fullname.style.border="2px red solid";
      return false;
  }
}

function validatePassword()
{
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,20})/;
  if(password.value.trim() == "" || password.value.trim() == null)
  {
    span[3].innerText="Blank Space not allowed";
    span[3].style.color="red"; 
    password.style.border="2px red solid";
    return false;
  }
  else if(regex.test(password.value.trim()))
  {
    if(password.value.trim().length >= 8 && password.value.trim().length <= 15)
    {
      span[3].innerText="Strong Password!";
      span[3].style.color="lime"; 
      password.style.border="2px lime solid";
      return true;
    }
    
    else
    {
      span[3].innerText="Too long password!";
      span[3].style.color="red"; 
      password.style.border="2px red solid";
      return false;
    }
  }
  else if(password.value.trim().length < 8)
    {
      span[3].innerText="Weak Password!";
      span[3].style.color="orange"; 
      password.style.border="2px orange solid";
      return false;
    }
  else
  {
    span[3].innerText="Invalid!";
    span[3].style.color="red";
    password.style.border="2px red solid";
    return false;
  }
}


function validateEmail()
{
  const regex=/^\w+([\.-]?\w+)+@(christuniversity.in|christuniversity.com)$/;
  if(email.value.trim() == "" || email.value.trim() == null)
  {
    span[2].innerText = "Blank Email!";
    span[2].style.color= "red";
    email.style.border="2px red solid";
    validatePassword();
    
  }
  if(regex.test(email.value.trim()))
  {
    span[2].innerText = "Valid Email!";
    span[2].style.color="lime";
    email.style.border="2px lime solid";
    validatePassword();
  }
  else 
  {
    span[2].innerText = "Invalid Email!";
    span[2].style.color="red";
    email.style.border="2px red solid";
    return false;
  }
}

