const morebtn = document.querySelector(
  ".info .metadata .tittleAndButton .moreBtn"
);
const title = document.querySelector(".info .metadata .tittleAndButton .title");

morebtn.addEventListener("click", () => {
  morebtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
