function submitStep2() {
    const formData = new FormData(document.getElementById('signupForm2'));
    const data = Object.fromEntries(formData);
    const userId = localStorage.getItem('userId'); // Retrieve userId from Step 1
  
    if (!userId) {
      alert('User ID not found. Please restart the signup process.');
      return;
    }
  
    data.userId = userId; // Include userId in the request
  
    fetch('http://localhost:3000/user-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        alert(result.message || 'Signup Step 2 complete!');
        // Redirect to a final page or display a success message
      })
      .catch(err => console.error('Error:', err));
  }
  