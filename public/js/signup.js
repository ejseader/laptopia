const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ name: username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
document.querySelector('.signup-form')
.addEventListener('click', signupFormHandler)