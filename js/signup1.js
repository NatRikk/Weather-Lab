document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('passwordForm');

  // Listen for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission, which would reload the page

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3000/user-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      if (result.userId) {
        localStorage.setItem('userId', result.userId); // Save userId for Step 2
        window.location.href = 'signup2.html'; // Navigate to Step 2
      } else {
        alert(result.message || 'Signup Step 1 failed.');
      }
    })
    .catch(err => console.error('Error:', err));
  });

  // Prevent 'Enter' key from submitting the form
  form.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent the form from submitting when pressing 'Enter'
    }
  });
});

