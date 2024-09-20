// Dark mode
const darkModeBtn = document.querySelector("#darkMode");
darkModeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const nav = document.querySelecto(".navbar");
    nav.style = {
        "backgroundColor":"black",
        "color":"white"
    }
})







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

//      Shortcut to go to the top of page.
document.body.querySelector(".back_button").addEventListener("click", () => {
    window.scrollTo(0, 0);
});