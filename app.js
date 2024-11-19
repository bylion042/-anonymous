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

     // Function to change profile picture and background
     function changeProfilePic(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            // Set new profile picture
            document.getElementById('profile-picture').src = e.target.result;
  
            // Optionally, you can also change the background of the profile container
            document.querySelector('.details').style.backgroundColor = '#fff'; // Reset to white
            document.querySelector('.details').style.backgroundImage = `url(${e.target.result})`; // Set background image
          };
          reader.readAsDataURL(file);
        }
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