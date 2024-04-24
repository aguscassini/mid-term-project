document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementsByClassName("form-box");
  
    form.addEventListener("submit", function(event) {
      // Prevents the form to be sent automatically
      event.preventDefault();
  
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const phoneInput = document.getElementById("phone");
      const messageInput = document.getElementById("message");
  
      if (!nameInput.value.trim()) {
        alert("Enter your full name.");
        return;
      }
  
      if (!emailInput.value.trim()) {
        alert("Enter your email address.");
        return;
      }
  
      if (!phoneInput.value.trim()) {
        alert("Enter your phone number.");
        return;
      }
  
      if (!messageInput.value.trim()) {
        alert("Write your message here...");
        return;
      }
  
      //If everything is validated, sends the form 
      form.submit();
    });
  });