document.addEventListener('DOMContentLoaded', () => {
  const authBtn = document.getElementById('authBtn');
  let isSignedIn = false;

  authBtn.addEventListener('click', () => {
    if (!isSignedIn) {
      // Simulate Sign Up
      isSignedIn = true;
      authBtn.textContent = '🧑‍💼'; // Profile icon
      authBtn.title = 'My Profile';
    } else {
      // Simulate sign out (optional)
      isSignedIn = false;
      authBtn.textContent = '👤';
      authBtn.title = 'Sign Up';
    }
  });
});
