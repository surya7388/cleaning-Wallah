
function sendEmail(){

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sp6660322@gmail.com",
    Password : "7388236911",
    To : 'pratapsurya7388@gmail.com',
    From : document.getElementById('name').value,
    Subject : "This is the subject",
    Body : "name:"+document.getElementById('name').value
    
}).then(
  message => alert(message)
);}