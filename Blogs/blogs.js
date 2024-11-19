
//  open add page of the website.
document.querySelector("#addBlog").addEventListener("click", () => {
    window.location.href = "../Add/add.html";
  });

const readMore = document.querySelector(".btn").addEventListener("click", (e)=>{
    e.preventDefault();
    const downContent = document.querySelector(".down");
    if(downContent.style.display === "block"){
        downContent.style.display = "none";
    }else{
        downContent.style.display = "block";
    }
});
const readMore1 = document.querySelector(".btn1").addEventListener("click", (e)=>{
    e.preventDefault();
    const downContent1 = document.querySelector(".down1");
    if(downContent1.style.display === "block"){
        downContent1.style.display = "none";
    }else{
        downContent1.style.display = "block";
    }
});


 // Retrieve data from localStorage for posts.


document.addEventListener("DOMContentLoaded", () => {
  // Handle Like Button and Comments dynamically for all posts
  const posts = document.querySelectorAll(".category-card");

  posts.forEach((post, index) => {
    // Unique keys for localStorage
    const postId = `post-${index + 1}`;
    const likeKey = `${postId}-likes`;
    const commentsKey = `${postId}-comments`;

    // DOM elements
    const likeButton = post.querySelector(".actions #likeButton");
    const likeCountSpan = likeButton.querySelector("span");
    const commentButton = post.querySelector(".actions #commentButton");
    const commentInput = post.querySelector(".comments-section #commentInput");
    const addCommentButton = post.querySelector(".comments-section #addCommentButton");
    const commentsList = post.querySelector(".comments-section #commentsList");

    // Initialize likes and comments from localStorage
    let likeCount = parseInt(localStorage.getItem(likeKey)) || 0;
    let comments = JSON.parse(localStorage.getItem(commentsKey)) || [];

    // Update UI
    likeCountSpan.textContent = likeCount;
    commentsList.innerHTML = comments.map(comment => `<li>${comment}</li>`).join("");

    // Like Button Click
    likeButton.addEventListener("click", () => {
      likeCount++;
      localStorage.setItem(likeKey, likeCount);
      likeCountSpan.textContent = likeCount;
    });

    // Add Comment Button Click
    addCommentButton.addEventListener("click", () => {
      const commentText = commentInput.value.trim();
      if (commentText) {
        comments.push(commentText);
        localStorage.setItem(commentsKey, JSON.stringify(comments));
        commentsList.innerHTML += `<li>${commentText}</li>`;
        commentInput.value = ""; // Clear input
      }
    });
  });
});



