const leftHad = document.querySelector(".licon");
const rightHad = document.querySelector(".rightIcon");
const toggler = document.querySelector(".dropdown");


leftHad.addEventListener("click", (e) => {
  leftHad.style.display = "none";
  rightHad.style.display = "flex";
  toggler.style.display = "flex";
  toggler.style.transform = "translateX(100%)"; // initial position, off-screen to the right

  // animate the transition
  requestAnimationFrame(() => {
    toggler.style.transform = "translateX(0)"; // final position, fully visible
  });
});

rightHad.addEventListener("click", () => {
  leftHad.style.display = "flex";
  rightHad.style.display = "none";
  
  toggler.style.transform = "translateX(-100%)"; // animate back to initial position
  toggler.style.display = "none";
});