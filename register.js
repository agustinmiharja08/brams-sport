// register.js
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    // Simpan status login dan data user
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Redirect ke index.html
    window.location.href = 'index.html';
  } else {
    alert('Harap isi semua data.');
  }
});