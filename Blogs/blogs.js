

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
const readMore2 = document.querySelector(".btn2").addEventListener("click", (e)=>{
    e.preventDefault();
    const downContent2 = document.querySelector(".down2");
    if(downContent2.style.display === "block"){
        downContent2.style.display = "none";
    }else{
        downContent2.style.display = "block";
    }
});

//  open add page of the website.
document.getElementById("add").addEventListener("click", () => {
    window.location.href = "../Add/add.html";
  });