let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  if (message === "" || name ==="" || subject ==="") {
    alert("Please fill in your Name, Subject, and Message before sending.");
    return;
  }
  

  let formattedMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0A%0A${message}`;

  let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sabarishvelu4@gmail.com&su=${encodeURIComponent(subject)}&body=${formattedMessage}`;
  
  window.open(mailtoLink, "_blank");
 
}