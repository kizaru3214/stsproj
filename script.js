// Function to create new message bubbles
function createMessageBubble(message, type) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(type);
  messageDiv.textContent = message;
  document.getElementById("chat-box").appendChild(messageDiv);
  document.getElementById("chat-box").scrollTop =
    document.getElementById("chat-box").scrollHeight; // Auto-scroll to bottom
}

// Function to handle sending a message
function sendMessage() {
  const message = document.getElementById("message-input").value.trim();
  if (message) {
    createMessageBubble(message, "user-message");
    document.getElementById("message-input").value = ""; // Clear input field
    // Simulate a response from the bot
    setTimeout(() => {
      createMessageBubble("This is a bot response!", "bot-message");
    }, 1000);
  }
}

// Event listener for send button click
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Event listener for Enter key press
document.getElementById("message-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
