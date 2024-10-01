// Dark mode
const darkModeBtn = document.querySelector("#darkMode");
darkModeBtn.addEventListener("click",(e)=>{
    // e.preventDefault();
    const nav = document.querySelector(".navbar");
    if(nav.style.backgroundColor!="black"){
    nav.style.backgroundColor = "black";
    nav.style.color = "white";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    const searchBtn = document.querySelector(".Search");
    searchBtn.preventDefault();
    }else if(nav.style.backgroundColor=="black"){
        nav.style.backgroundColor = "mintcream";
        nav.style.color = "Black";
        document.body.style.backgroundColor = "mintcream";
        document.body.style.color = "Black";
    }
});



//       Typing Animation

const typingText = document.getElementById('typing-text');
let text = "";
const typingSpeed = 200;

let index = 0;
function type() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        // typingText.textContent=" ";
        setTimeout(type, typingSpeed);
    }
    // text = " "
    // setTimeout(type,typingSpeed);
}

type();

    //  Shortcut to go to the top of page.

    document.body.querySelector(".icons").addEventListener("click", () => {
    window.scrollTo(0, 0);
});

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
