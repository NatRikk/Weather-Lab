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