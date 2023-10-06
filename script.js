document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay of 8 seconds (8000 milliseconds)
  setTimeout(function () {
    // Hide preloader when content is loaded
    document.body.classList.add("loaded");
  }, 2000);
});


