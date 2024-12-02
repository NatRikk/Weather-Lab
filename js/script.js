function navigateTo(page) {
    window.location.href = `../pages/${page}`;
  }
function submitSignup(event) {
// Prevent the default form submission behavior
event.preventDefault();  
// Here, you could validate the form or save data if needed
// Redirect to the dashboard page
navigateTo('dashboard.html');
}    

function validatePasswordForm() {
  const form = document.getElementById('passwordForm');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const errorMessage = document.getElementById('error-message');
  const submitButton = document.getElementById('submitBtn');

  // Event listener for the "Next Page" button
  submitButton.addEventListener('click', function(event) {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      // Validate passwords
      if (password !== confirmPassword) {
          errorMessage.textContent = 'Passwords do not match!'; // Display error message
          confirmPasswordInput.style.borderColor = 'red'; // Highlight the confirm password field
      } else {
          errorMessage.textContent = ''; // Clear error message
          confirmPasswordInput.style.borderColor = ''; // Reset border color
          navigateTo('signup2.html')
          // Add navigation logic if required, e.g., navigateTo('signup2.html');
      }
  });

  // Event listener for changes in the "Confirm Password" field
  confirmPasswordInput.addEventListener('input', function() {
      const confirmPassword = confirmPasswordInput.value;
      if (confirmPassword === '') {
          errorMessage.textContent = ''; // Clear the error message when empty
          confirmPasswordInput.style.borderColor = ''; // Reset border color
      } else if (confirmPasswordInput.value === passwordInput.value) {
          errorMessage.textContent = ''; // Clear error message if passwords match
          confirmPasswordInput.style.borderColor = ''; // Reset border color
      }
  });
}

