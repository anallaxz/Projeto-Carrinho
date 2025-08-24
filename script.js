// Modal
const demoModal = document.getElementById("demoModal");
const openDemo = document.getElementById("openDemo");
const closeDemo = document.getElementById("closeDemo");

openDemo.addEventListener("click", () => demoModal.classList.add("open"));
closeDemo.addEventListener("click", () => demoModal.classList.remove("open"));
window.addEventListener("click", e => { if(e.target === demoModal) demoModal.classList.remove("open") });
