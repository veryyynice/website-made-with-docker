function loadMessage() {
  fetch("/api/message")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("msg").textContent = data.message;
    })
    .catch((err) => {
      console.error("API error", err);
    });
}
