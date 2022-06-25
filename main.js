const fill = document.querySelector(".fill");

const empties = document.querySelectorAll(".empty");
// console.log(empties);

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  fill.className += " hold";
  setTimeout(() => {
    fill.className = "invisible";
  }, 0)
}

function dragEnd() {
  fill.className = "fill";
}


function dragOver(e) {
  e.preventDefault();
  console.log("over");
}

function dragEnter() {
  console.log("enter");
  this.className += " hovered";
}

function dragLeave() {
  console.log("leave");
  this.className = "empty";
}

function dragDrop() {
  console.log("drop");
  this.className = "empty";
  this.appendChild(fill);
}
