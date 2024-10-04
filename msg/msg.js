document.querySelector('#home').addEventListener("click",()=>{
    window.location.href = '../index.html';
})

// const notifyBtn = document.getElementById('notify-btn');
// const notificationContainer = document.getElementById('notification-container');

// notifyBtn.addEventListener('click', function() {
//   notificationContainer.style.display = 'block';
// });

// // Optional: Add a close button to hide the notification container
// const closeBtn = document.getElementById('close-btn');
// closeBtn.addEventListener('click', function() {
//   notificationContainer.style.display = 'none';
// });
const notifyBtn = document.getElementById('notify-btn');
const notificationContainer = document.getElementById('notification-container');
const closeBtn = document.getElementById('close-btn');

notifyBtn.addEventListener('click', function() {
  if (notificationContainer.style.display === 'none') {
    notificationContainer.style.display = 'block';
  } else {
    notificationContainer.style.display = 'none';
  }
});

closeBtn.addEventListener('click', function() {
  notificationContainer.style.display = 'none';
});
