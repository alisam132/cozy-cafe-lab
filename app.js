console.log("ok");

//part 1 
mainTitle =document.querySelector("#main-title");
mainTitle.style.textAlign = "center";

//part 2
mainBody =document.querySelector("body");
mainBody.style.color = "cenlightsteelblueter";

//part 3
paragraph = document.querySelector('p');
paragraph.textContent ='Life happens, coffee helps.';

//part 4
highLightTitle = document.querySelectorAll('.highlight-title');
highLightTitle.forEach(element => {
    element.style.fontstyle = "italic";
});

// part 5
const newLi = document.createElement("li");
newLi.textContent = "Rose Cake";
const uList = document.querySelector("#past-menu-items");
uList.appendChild(newLi);

//part 6
const newLiKarak = document.createElement("li");
newLiKarak.textContent = "Karak";
const uListKarak = document.querySelector('#cafe-specialties');
uListKarak.appendChild(newLiKarak);

//part 7
const newDivBlockEvent = document.createElement("div");
const newH3Event = document.createElement("h3");
const newParEvent = document.createElement("p");

newDivBlockEvent.classList.add('blog-post');
newH3Event.textContent = "Karak Tea Tasting Event";
newParEvent.textContent = "(Karak Tea Tasting Event) will start this weekend from 4PM to 8PM for the first hour there are some exited activities";

let newBlock = mainBody.appendChild(newDivBlockEvent);
newBlock.appendChild(newH3Event);
newBlock.appendChild(newParEvent);





