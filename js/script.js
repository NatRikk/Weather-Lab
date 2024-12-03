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
    const submitButton = document.getElementById('');
  
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!$&#!%*?&])[A-Za-z\d!$&#!%*?&]{8,}$/;
  
    // Event listener for the "Next Page" button
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      // Validate password with regex
      if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long, include at least one uppercase letter, one digit, and one special character ($, &, !, #, ...).';
        passwordInput.style.borderColor = 'red'; // Highlight the password field
        return; // Stop further validation
      }
  
      // Validate passwords match
      if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!'; // Display error message
        confirmPasswordInput.style.borderColor = 'red'; // Highlight the confirm password field
        return; // Stop further validation
      }
  
      // Clear error messages and reset styles if validation passes
      errorMessage.textContent = '';
      passwordInput.style.borderColor = '';
      confirmPasswordInput.style.borderColor = '';
  
      // If validation passes, proceed to next page
      navigateTo('signup2.html');
    });
  
    // Event listener for changes in the "Confirm Password" field
    confirmPasswordInput.addEventListener('input', function() {
      const confirmPassword = confirmPasswordInput.value;
  
      if (confirmPassword === '') {
        errorMessage.textContent = ''; // Clear the error message when empty
        confirmPasswordInput.style.borderColor = ''; // Reset border color
      } else if (confirmPassword === passwordInput.value) {
        errorMessage.textContent = ''; // Clear error message if passwords match
        confirmPasswordInput.style.borderColor = ''; // Reset border color
      }
    });
  }  