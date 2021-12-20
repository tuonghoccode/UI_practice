const sidebar_click = document.querySelectorAll(".wrapper__sidebar i");
const header_click = document.querySelectorAll(
  ".wrapper__content__header--right i"
);


function active_sidebar(){
    sidebar_click.forEach(item=>{
        if (item!=this) item.classList.remove("active");
    })
    this.classList.toggle("active");
}
function active_header() {
  header_click.forEach((item) => {
    if (item != this) item.classList.remove("active");
  });
  this.classList.add("active");
}

sidebar_click.forEach((item) => item.addEventListener("click",active_sidebar));
header_click.forEach((item) => item.addEventListener("click", active_header));