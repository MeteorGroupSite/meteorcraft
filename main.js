// Adjust Loading Screen Duration
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  
  // Set a delay for the loading screen
  setTimeout(() => {
      loadingScreen.style.transition = 'opacity 1s ease';
      loadingScreen.style.opacity = '0';

      setTimeout(() => {
          loadingScreen.style.display = 'none';
      }, 1000); // Wait for the fade-out animation to finish
  }, 2000); // Adjust this value (in milliseconds) to make the loading screen last longer
});

// Copy IP Button
function copyIP() {
  navigator.clipboard.writeText('servern/aerror').then(() => {
      alert('Server IP copied to clipboard!');
  });
}
