// script.js: ページに動きをつけるためのJavaScriptファイルです。

const message = document.getElementById("message");
const toggleButton = document.getElementById("toggle-button");

const messages = ["Hello, Hub!", "ボタンが押されました！", "また押してね！"];
let currentIndex = 0;

toggleButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % messages.length;
  message.textContent = messages[currentIndex];
});
