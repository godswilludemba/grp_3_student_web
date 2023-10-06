document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay of 8 seconds (8000 milliseconds)
  setTimeout(function () {
    // Hide preloader when content is loaded
    document.body.classList.add("loaded");
  }, 2000);
});



const typingText = document.getElementById('typing-text');
const originalText = "Are you a student ";

function typeText() {
  typingText.textContent = '';
  let i = 0;

  function type() {
    if (i < originalText.length) {
      typingText.textContent += originalText.charAt(i);
      i++;
      setTimeout(type, 100); // Adjust typing speed (milliseconds)
    } else {
      setTimeout(eraseText, 2000); // Wait for 2 seconds before erasing
    }
  }

  function eraseText() {
    if (i >= 0) {
      typingText.textContent = originalText.substring(0, i);
      i--;
      setTimeout(eraseText, 50); // Adjust erasing speed (milliseconds)
    } else {
      setTimeout(type, 1000); // Wait for 1 second before typing again
    }
  }

  type();
}

// Start typing on page load
typeText();