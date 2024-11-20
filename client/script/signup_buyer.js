document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        var formData = new FormData(signupForm);
        // Redirect to home_organizer.html with encoded form data
        var encodedFormData = Array.from(formData).map(function(pair) {
            return pair.map(encodeURIComponent).join('=');
        }).join('&');
        window.location.href = 'home_buyer.html?' + encodedFormData;
    });
  });
  