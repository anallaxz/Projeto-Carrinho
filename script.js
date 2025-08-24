// Modal
const demoModal = document.getElementById("demoModal");
const openDemo = document.getElementById("openDemo");
const closeDemo = document.getElementById("closeDemo");
const demoVideo = document.getElementById("demoVideo");

openDemo.addEventListener("click", () => {
  demoModal.classList.add("open");
  demoVideo.play();
});

function closeDemoModal() {
  demoModal.classList.remove("open");
  demoVideo.pause();
  demoVideo.currentTime = 0;
}

closeDemo.addEventListener("click", closeDemoModal);
window.addEventListener("click", e => {
  if(e.target === demoModal) closeDemoModal();
});
