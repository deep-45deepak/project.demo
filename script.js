// Dark mode
const darkModeBtn = document.querySelector("#darkMode");
darkModeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const nav = document.querySelector(".navbar");
    if(nav.style.backgroundColor!="black"){
    nav.style.backgroundColor = "black";
    nav.style.color = "white";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    const searchBtn = document.querySelector("#Search");
    searchBtn.style.backgroundColor = 'black';
    searchBtn.style.color = "white";
    const CPanel = document.querySelector(".ControlPanel");
    CPanel.style.backgroundColor = 'black';
    const right = document.querySelectorAll('.rBtn');
    right.style.backgroundColor = 'black';
    right.style.color = "white";
}else if(nav.style.backgroundColor=="black"){
        const searchBtn = document.querySelector("#Search");
        searchBtn.style.backgroundColor = 'mintcream';
        nav.style.backgroundColor = "mintcream";
        nav.style.color = "Black";
        document.body.style.backgroundColor = "mintcream";
        document.body.style.color = "Black";
        const CPanel = document.querySelector(".ControlPanel");
        CPanel.style.backgroundColor = 'white';
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
})

//  open blogs page of the website.
document.querySelector('#blogs').addEventListener("click",()=>{
    window.location.href = './blogs/blogs.html';
})



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













//       Typing Animation

// const typingText = document.getElementById('typing-text');
// let text = "Create a blog worth Sharing.";
// const typingSpeed = 200;

// let index = 0;
// function type() {
//     if (index < text.length) {
//         typingText.textContent += text[index];
//         index++;
//         // typingText.textContent=" ";
//         setTimeout(type, typingSpeed);
//     }
//     // text = " "
//     // setTimeout(type,typingSpeed);
// }

// type();

    //  Shortcut to go to the top of page.


// const boxes = document.querySelectorAll('.box');
// const secondTop = document.querySelector('.secondTop');
// const height = secondTop.offsetHeight;
// const width = secondTop.offsetWidth;
// console.log(height);
// console.log(width);

// boxes.forEach((box) => {
//   const randomX = Math.floor(Math.random() * (width - box.offsetWidth));
//   const randomY = Math.floor(Math.random() * (height - box.offsetHeight));
//   box.style.position = 'absolute';
//   box.style.top = `${randomY}px`;
//   box.style.left = `${randomX}px`;
//   box.style.transition = 'all 2s ease-in-out';
//   box.style.transform = `translate(${randomX}px, ${randomY}px)`;
// });

// setInterval(() => {
//   boxes.forEach((box) => {
//     const randomX = Math.floor(Math.random() * (width - box.offsetWidth));
//     const randomY = Math.floor(Math.random() * (height - box.offsetHeight));
//     box.style.transform = `translate(${randomX}px, ${randomY}px)`;
//   });
// }, 2000);
