// Get the container element for your dropdown menu
const dropdownContainer = document.querySelector('.dropdown-container');

// Add a scroll event listener to the container
dropdownContainer.addEventListener('scroll', function() {
  // Check if the user has scrolled to the bottom of the container
  if (dropdownContainer.scrollHeight - dropdownContainer.scrollTop === dropdownContainer.clientHeight) {
    // Load more items or perform any other actions here
  }
});