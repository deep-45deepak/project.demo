const signIn = document.querySelector(".form-container2");
const logIn = document.querySelector(".form-container1");

const btn1 = document.getElementById('log-in');
const btn2 = document.getElementById('sign-in');

btn1.addEventListener("click",()=>{
   logIn.style.display = 'none';
   signIn.style.display = 'block';
});

btn2.addEventListener("click",()=>{
    signIn.style.display = 'none';
    logIn.style.display = 'block';
});

const login = document.getElementById('data1');
		const loginData = {};

		login.addEventListener('submit', (e) => {
			e.preventDefault();
			loginData.name = document.getElementById('Username').value;
			loginData.email = document.getElementById('Email').value;
			loginData.password = document.getElementById('Password').value;
			console.log(loginData);
			// Send userData to server or store it in local storage
	    });

const sign_in = document.getElementById('data2');
		const sign_inData = {};

		sign_in.addEventListener('submit', (e) => {
			e.preventDefault();
			sign_inData.name = document.getElementById('username').value;
			sign_inData.email = document.getElementById('email').value;
			sign_inData.password = document.getElementById('password').value;
			console.log(sign_inData);
			// Send userData to server or store it in local storage
	    });

// const serverData = new FormData(document.getElementById('data1'));
// const fileForLog_in = new File(serverData, 'data.txt', 'text/plain');
        
// const user = new FileWriter(fileForLog_in);
// writer.write(formData.get('inputData'));
// writer.close();
        

// const serverNewData = new FormData(document.getElementById('data2'));
// const fileForSign_in = new File(serverNewData, 'data.txt', 'text/plain');
        
// const writer = new FileWriter(fileForSign_in);
// writer.write(formData.get('inputData'));
// writer.close();
        


