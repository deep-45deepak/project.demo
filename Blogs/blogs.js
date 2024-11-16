
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



// Retrieve data from localStorage for 1st post


let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// Update like count and comments on page load
document.getElementById('likeCount').textContent = likeCount;
updateCommentsList(comments);

// Like button functionality
document.getElementById('likeButton').addEventListener('click', () => {
  likeCount++;
  document.getElementById('likeCount').textContent = likeCount;
  localStorage.setItem('likeCount', likeCount); // Store in localStorage
});

// Add comment functionality
document.getElementById('addCommentButton').addEventListener('click', () => {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();

  if (commentText) {
    comments.push(commentText);
    localStorage.setItem('comments', JSON.stringify(comments)); // Store comments in localStorage

    updateCommentsList(comments); // Update comments display
    commentInput.value = ''; // Clear the input
  }
});

// Function to update the comments list
function updateCommentsList(commentsArray) {
  const commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = ''; // Clear existing comments

  commentsArray.forEach((comment, index) => {
    const commentItem = document.createElement('li');
    commentItem.textContent = comment;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => deleteComment(index)); // Attach delete event

    commentItem.appendChild(deleteButton);
    commentsList.appendChild(commentItem);
  });
}

// Function to delete a comment
function deleteComment(index) {
  comments.splice(index, 1); // Remove the comment at the given index
  localStorage.setItem('comments', JSON.stringify(comments)); // Update localStorage
  updateCommentsList(comments); // Refresh comments display
}
