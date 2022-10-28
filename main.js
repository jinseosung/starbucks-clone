const navSubs = document.querySelectorAll(".nav--sub__list");

// Navbar slide down & slide up
function handleNavSubDisplay(event) {
  const target = event.target;
  const navSubTitle = target.children[0];
  const navSubProduct = target.children[1];
  navSubTitle.classList.toggle("on");
  navSubProduct.classList.toggle("on-display");
}

navSubs.forEach((navSub) =>
  navSub.addEventListener("mouseenter", handleNavSubDisplay)
);

navSubs.forEach((navSub) =>
  navSub.addEventListener("mouseleave", handleNavSubDisplay)
);
