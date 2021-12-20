const items = document.querySelectorAll(".notify__body__item__content");

function active(){
    items.forEach((item) => {
        if (item!=this) 
        return item.parentElement
          .querySelector(".btn")
          .classList.remove("active");
        
    });
    this.parentElement.querySelector(".btn").classList.toggle("active");
    
}

items.forEach(item => item.addEventListener("click",active))
