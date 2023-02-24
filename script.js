// Initialize EmailJS with your user ID and service ID
emailjs.init("fmaC1SgVUQIxSo7kN");

// When the contact form is submitted
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data
  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  // Send the email using EmailJS
  emailjs.send("service_66ievb7", "template_9cxnt9i", formData)
    .then(function(response) {
      console.log("SUCCESS", response);
      alert("Your message was sent successfully.");
    }, function(error) {
      console.log("FAILED", error);
      alert("Sorry, there was an error sending your message. Please try again later.");
    });

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});
