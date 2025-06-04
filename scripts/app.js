document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        alert(`You typed: ${input.value}`);
      }
    });
  });

  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message !== "") {
      alert("Message sent: " + message);
      input.value = "";
    } else {
      alert("Please type something first!");
    }
  }
