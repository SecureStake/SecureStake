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
<script>
  function isUserSignedIn() {
    // Simulate check - replace with real login check later
    return localStorage.getItem("signedIn") === "true";
  }

  function handleStakeClick() {
    if (isUserSignedIn()) {
      window.location.href = "plans.html"; // Redirect to staking plans
    } else {
      window.location.href = "login.html"; // Redirect to login
    }
  }
</script>
