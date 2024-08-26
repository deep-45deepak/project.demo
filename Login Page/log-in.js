const logIn = document.querySelector(".form-container1");
const signIn = document.querySelector(".form-container2");

const btn1 = document.querySelector('#change1');
const btn2 = document.querySelector('#change2');

		btn1.addEventListener("click",()=>{
			signIn.style.display = 'block';
			logIn.style.display = 'none';
		});
		btn2.addEventListener("click",()=>{
			logIn.style.display = 'block';
			signIn.style.display = 'none';
		});

const login = document.querySelector('.data1');
		const loginData = {};

		login.addEventListener('click', (e) => {
			e.preventDefault();
			loginData.name = document.getElementById('Username').value;
			loginData.email = document.getElementById('Email').value;
			loginData.password = document.getElementById('Password').value;
			console.log(loginData);
			if (loginData.password=="password") {
				window.open("../index.html");
			}else if (loginData.name == ""){
				const msg = document.querySelector("#loginMsg");
				msg.textContent = "Enter correct username!!";
				msg.style.color = "red";
			}else if (loginData.email == ""){
				const msg = document.querySelector("#loginMsg");
				msg.textContent = "Enter correct Email!!";
				msg.style.color = "red";
			}else if (loginData.password == ""){
				const msg = document.querySelector("#loginMsg");
				msg.textContent = "Enter Correct Password!!";
				msg.style.color = "red";
			}else{
				const msg = document.querySelector("#loginMsg");
				msg.textContent = "Wrong Password.!!";
				msg.style.color = "red";
			}
			// Send userData to server or store it in local storage
	    });
		

const sign_in = document.querySelector('.data2');
		const sign_inData = {};
		sign_in.addEventListener('click', (e) => {
			e.preventDefault();
			sign_inData.name = document.getElementById('username').value;
			sign_inData.email = document.getElementById('email').value;
			sign_inData.password = document.getElementById('password').value;
			console.log(sign_inData);
			if (loginData.password=="password") {
				window.location.href = "../index.html";
			}else{
				const msg = document.querySelector("#signupMsg");
				msg.textContent = "Wrong Password.!!";
				msg.style.color = "red";	
			}
			// Send userData to server or store it in local storage
	    });
