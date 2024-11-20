        // Select all anchor tags inside the navigation
        const links = document.querySelectorAll('nav a');
    
        // Add click event listener to each link
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove 'active' class from all links
                links.forEach(l => l.classList.remove('active'));
    
                // Add 'active' class to the clicked link
                e.target.classList.add('active');
            });
        });

// Load profile picture and background image from localStorage when the page loads
window.onload = function() {
    // Retrieve saved profile picture from localStorage
    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
        document.getElementById('profile-picture').src = savedProfilePic;
    }

    // Retrieve saved background image from localStorage
    const savedBackgroundImage = localStorage.getItem('backgroundImage');
    if (savedBackgroundImage) {
        document.querySelector('.details').style.backgroundImage = `url(${savedBackgroundImage})`;
    }
};

// Function to trigger the file input
function triggerFileInput() {
    document.getElementById('profilePicInput').click(); // Triggers the file input to open
}

// Function to change profile picture and background image, and save them in localStorage
function changeProfilePic(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImageSrc = e.target.result; // Get the new image source (base64)

            // Set the new profile picture
            document.getElementById('profile-picture').src = newImageSrc;

            // Save the new profile picture in localStorage
            localStorage.setItem('profilePic', newImageSrc);

            // Optionally, set and save the background image of the profile container
            document.querySelector('.details').style.backgroundColor = '#fff'; // Reset background color to white
            document.querySelector('.details').style.backgroundImage = `url(${newImageSrc})`; // Set background image

            // Save the background image URL in localStorage as well
            localStorage.setItem('backgroundImage', newImageSrc);
        };
        reader.readAsDataURL(file); // Convert the selected file to base64
    }
}


// Trigger the file input dialog when the pen icon is clicked
function triggerFileInput() {
    document.getElementById('profilePicInput').click();
}


  // Trigger the file input when pen icon is clicked
  function triggerFileInput() {
    document.getElementById('profilePicInput').click();
  }


  const toggleButton = document.getElementById('set');
  const closeButton = document.getElementById('close');
  const toggleDiv = document.getElementById('closeDiv');

  // Event listener for the "open" button
  toggleButton.addEventListener('click', function() {
    toggleDiv.style.display = 'block'; // Show the div
  });

  // Event listener for the "close" button
  closeButton.addEventListener('click', function() {
    toggleDiv.style.display = 'none'; // Hide the div
  });