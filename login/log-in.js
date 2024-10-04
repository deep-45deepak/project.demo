//  After log in open the main page of the website.
const sPage = document.getElementById("continue1");
sPage.addEventListener("click", (e) => {
  e.preventDefault();
  const person1 = {};
  let new_user = document.getElementById("Username").value;
  let new_email = document.getElementById('Email').value;
  let new_password = document.getElementById('Password').value;
  person1.username = new_user;
  person1.email = new_email;
  person1.password = new_password;
  console.log(person1);
  if (person1.username = new_user && person1.password == new_password && person1.email == new_email) {
	// for new tab prefer this command.
    // window.open("../index.html");
	// for same page after log-in prefer the below command
	window.location.href = '../index.html';
  }
});


const lPage = document.getElementById("continue2");
lPage.addEventListener("click", (e) => {
  e.preventDefault();
  const person2 = {};
  person2.email = document.getElementById('Email2').value;
  person2.password = document.getElementById('Password2').value;
  console.log(person2);
  if (person2.password == "password" && person2.email == "dpk.41deep@gmail.com") {
	// for new tab prefer this command.
    // window.open("../index.html");
	// for same page after log-in prefer the below command
	window.location.href = '../index.html';
  } else if (person2.email == "") {
    const msg = document.querySelector(".Msg2");
    msg.style.color = "red";
    msg.textContent = "Enter correct Email!!";
  } else if (person2.password == "") {
    const msg = document.querySelector(".Msg2");
    msg.style.color = "red";
    msg.textContent = "Enter Correct Password!!";
  } else {
    const msg = document.querySelector(".Msg2");
    msg.style.color = "red";
    msg.textContent = "Wrong Password.!!";
  }
});


// Open sign in page. and login page
const signIn = document.querySelector(".signIn");
const logIn = document.querySelector(".login");
const btn1 = document.querySelector(".btn").addEventListener("click",(e) => {
	e.preventDefault();
	signIn.style.display = "none";
	logIn.style.display = "block";
});