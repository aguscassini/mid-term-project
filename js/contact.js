


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-box");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();       // form is not sent automatically

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

       // Check if name is "Ironhack"
    if (nameInput.value.trim().toLowerCase() === "ironhack") {
      alert("You cannot be Ironhack, because I am Ironhack.");
      return;
    }
      
      form.submit(); //If everything is validated, sends the form 
    });
  });



