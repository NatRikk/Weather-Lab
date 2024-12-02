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

document.getElementById('passwordForm').addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('error-message');

  if (password !== confirmPassword) {
      event.preventDefault(); // Prevent form submission
      errorMessage.textContent = 'Passwords do not match!';
  } else {
      errorMessage.textContent = ''; // Clear error message
  }
});
