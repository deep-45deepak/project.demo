      // JavaScript to handle the form submission and dynamic blog post creation
      document.getElementById('blogForm').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the default form submission

        // Get the form values
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0];

        // Check if the image is uploaded
        if (!image) {
            alert('Please upload an image.');
            return;
        }

        // Create a new FormData object to handle the image file
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgUrl = event.target.result;

            // Create new blog post elements
            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');

            // Create image element
            const img = document.createElement('img');
            img.src = imgUrl;
            blogPost.appendChild(img);

            // Create title element
            const h3 = document.createElement('h3');
            h3.textContent = title;
            blogPost.appendChild(h3);

            // Create content element
            const p = document.createElement('p');
            p.textContent = content;
            blogPost.appendChild(p);

            // Add the new blog post to the main content section
            document.getElementById('mainContent').appendChild(blogPost);

            // Clear the form
            document.getElementById('blogForm').reset();
        };

        // Read the image file as a data URL (base64)
        reader.readAsDataURL(image);
    });