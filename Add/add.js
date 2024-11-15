// JavaScript to handle the form submission and dynamic blog post creation
document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');
    const mainContent = document.getElementById('mainContent');

    // Load blog posts from localStorage when the page loads
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    savedPosts.forEach((post) => addPostToPage(post));

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form values
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0];

        if (!image) {
            alert('Please upload an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const imgUrl = event.target.result;

            const post = {
                id: Date.now(), // Unique ID for each post
                title,
                content,
                imgUrl,
            };

            // Save post to localStorage
            savedPosts.push(post);
            localStorage.setItem('blogPosts', JSON.stringify(savedPosts));

            // Add post to the page
            addPostToPage(post);

            // Clear the form
            form.reset();
        };

        reader.readAsDataURL(image);
    });

    // Add a blog post to the page
    function addPostToPage(post) {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.dataset.id = post.id;

        const img = document.createElement('img');
        img.src = post.imgUrl;
        img.style.width = "100%"; // Ensure the image adapts to its container
        img.style.maxWidth = "500px"; // Limit max width for larger screens
        img.style.height = "auto"; // Maintain aspect ratio
        blogPost.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = post.title;
        blogPost.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = post.content;
        blogPost.appendChild(p);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            deletePost(post.id);
        });
        blogPost.appendChild(deleteBtn);

        mainContent.appendChild(blogPost);
    }

    // Delete a blog post
    function deletePost(id) {
        // Remove post from localStorage
        const updatedPosts = savedPosts.filter((post) => post.id !== id);
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

        // Remove post from the page
        const blogPost = document.querySelector(`.blog-post[data-id="${id}"]`);
        if (blogPost) {
            blogPost.remove();
        }
    }

    // Adjust styles for responsiveness
    function makeResponsive() {
        const blogPosts = document.querySelectorAll('.blog-post');
        const screenWidth = window.innerWidth;

        blogPosts.forEach((post) => {
            if (screenWidth <= 768) { // For mobile screens
                post.style.width = '90%';
                post.style.margin = '10px auto';
                post.style.padding = '10px';
            } else { // For larger screens
                post.style.width = '45%';
                post.style.margin = '20px';
                post.style.padding = '15px';
            }
        });
    }

    // Call `makeResponsive` on page load and window resize
    makeResponsive();
    window.addEventListener('resize', makeResponsive);
});
