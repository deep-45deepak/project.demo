
// Select elements
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');

// Function to toggle sidebar
function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Event listeners for opening and closing the sidebar
toggleButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// back to main page
document.addEventListener("DOMContentLoaded", () => {
    const mailItems = document.querySelectorAll(".mail-item");
    const msgBox = document.querySelector(".msg");

    mailItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const subject = item.querySelector("h3").innerText;
            const content = item.querySelector("p").innerText;
            const time = item.querySelector("p:last-child").innerText;
            e.preventDefault();

            // Append the new message content instead of replacing it
            msgBox.insertAdjacentHTML("beforeend", `
                <div class="message-content">
                    <h3>${subject}</h3>
                    <p>${content}</p>
                    <div class="timestamp">
                        ${time}
                        <span class="double-tick">✓✓</span>
                    </div>
                </div>
            `);
        });
    });
});

// go back to home page
document.querySelector('#goBack').addEventListener("click",()=>{
    window.location.href = '../index.html';
});

// typing message
document.addEventListener("DOMContentLoaded", () => {
    const mailItems = document.querySelectorAll(".mail-item");
    const msgBox = document.querySelector(".msg");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    // Display existing messages from mail items
    mailItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const subject = item.querySelector("h3").innerText;
            const content = item.querySelector("p").innerText;
            const time = item.querySelector("p:last-child").innerText;
            e.preventDefault();

            // Append the new message content instead of replacing it
            msgBox.insertAdjacentHTML("beforeend", `
                <div class="message-content">
                    <h3>${subject}</h3>
                    <p>${content}</p>
                    <div class="timestamp">
                        ${time}
                        <span class="double-tick">✓✓</span>
                    </div>
                </div>
            `);
        });
    });

    // Function to handle sending messages
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Append the new typed message
            msgBox.insertAdjacentHTML("beforeend", `
                <div class="message-content">
                    <p>${messageText}</p>
                    <div class="timestamp">
                        ${currentTime}
                        <span class="double-tick">✓✓</span>
                    </div>
                </div>
            `);

            // Clear the input field after sending
            messageInput.value = '';
        }
    }

    // Event listener for the "Send" button click
    sendButton.addEventListener("click", sendMessage);

    // Event listener for the "Enter" key in the input field
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
            event.preventDefault(); // Prevents adding a newline in the input field
        }
    });
});

