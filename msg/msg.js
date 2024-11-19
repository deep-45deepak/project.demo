document.addEventListener('DOMContentLoaded', () => {
    const mailItems = document.querySelectorAll('.mail-item');
    const msgBox = document.querySelector('.msg'); // Main message container
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // Dynamically apply styles to make .msg scrollable
    msgBox.style.maxHeight = '550px'; // Set the max height for the .msg container
    msgBox.style.overflowY = 'auto';  // Enable vertical scrolling

    /**
     * Append a message to the message list inside the .msg class.
     * @param {string|null} subject - The subject of the message.
     * @param {string} content - The content of the message.
     * @param {string} time - The timestamp of the message.
     * @param {boolean} isUser - Indicates if the message is sent by the user.
     */
    function appendMessage(subject, content, time, isUser = false) {
      const messageClass = isUser ? 'user-message' : 'received-message';
      const blueTick = isUser
        ? `<span class="blue-tick">✓✓</span>` // Blue tick for user messages
        : '';

      const messagesContainer = msgBox.querySelector('.messages'); // Container for messages
      messagesContainer.insertAdjacentHTML(
        'beforeend',
        `
          <div class="message-content ${messageClass}">
            ${subject ? `<h4>${subject}</h4>` : ''}
            <p>${content}</p>
            <div style="margin:0.4em" class="timestamp">
              ${time}
              ${blueTick}
            </div>
          </div>
        `
      );
    }

    // Handle tapping on mail items
    mailItems.forEach(item => {
      item.addEventListener('click', () => {
        const subject = item.querySelector('h3').innerText;
        const content = item.querySelector('p').innerText;
        const time = item.querySelector('p:last-child').innerText;

        appendMessage(subject, content, time);
      });
    });

    // Handle sending a typed message
    function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText) {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
  
        appendMessage(null, messageText, currentTime, true);
        messageInput.value = ''; // Clear input field after sending
      }
    }
  
    // Event listener for "Send" button click
    sendButton.addEventListener('click', sendMessage);
  
    // Event listener for "Enter" key press
    messageInput.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault(); // Prevent newline in the input field
      }
    });
  });
  
  
