
// Dark mode toggle
const darkModeBtn = document.querySelector("#darkMode");

darkModeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nav = document.querySelector(".navbar");
    const controlPanel = document.querySelector(".ControlPanel");
    const searchBtn = document.querySelector("#S1");
    const searchBtnI = document.querySelector("#S2");
    const rightButtons = document.querySelectorAll('.rBtn');

    if (nav.style.backgroundColor !== "black") {
        // Apply dark theme
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        searchBtn.style.backgroundColor = 'black';
        searchBtnI.style.backgroundColor = 'black';
        searchBtn.style.color = "white";
        searchBtnI.style.color = "white";
        controlPanel.style.backgroundColor = 'black';
        controlPanel.style.color = 'white';
        body.style.color = "black";

        // Style all right side buttons in dark mode
        rightButtons.forEach(button => {
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
        });

    } else {
        // Revert to light theme
        nav.style.backgroundColor = "mintcream";
        nav.style.color = "black";
        document.body.style.backgroundColor = "mintcream";
        document.body.style.color = "black";
        searchBtn.style.backgroundColor = 'mintcream';
        searchBtnI.style.backgroundColor = 'mintcream';
        searchBtn.style.color = "black";
        searchBtnI.style.color = "black";
        controlPanel.style.backgroundColor = 'white';
        controlPanel.style.color = 'black';

        // Revert buttons to light theme
        rightButtons.forEach(button => {
            button.style.backgroundColor = 'mintcream';
            button.style.color = 'black';
        });
    }
});



    //  Shortcut to go to the top of page.

const topBtn = document.querySelector('#goto');
topBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});


//  open inbox page of the website.
document.querySelector('#inbox').addEventListener("click",()=>{
    window.location.href = './msg/msg.html';
});

//  open blogs page of the website.
document.querySelector('#blogs').addEventListener("click",()=>{
    window.location.href = './blogs/blogs.html';
});



//  Notification pop Up

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


// toggle the side bar

function openControlPanel() {
    const controlPanel = document.getElementById('controlPanel');
    controlPanel.classList.add('active');
  }

  function closeControlPanel() {
    const controlPanel = document.getElementById('controlPanel');
    controlPanel.classList.remove('active');
  }


// typing effect in the second section of the website



  document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();
    const headingText = "A beautiful website starts here";
    const typingHeading = document.getElementById("typing-heading");

    let index = 0;

    function type() {
      if (index < headingText.length) {
        typingHeading.textContent += headingText.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here (100ms per character)
      }
    }

    typingHeading.textContent = ""; // Clear the h1 content initially
    type(); // Start typing
  });

