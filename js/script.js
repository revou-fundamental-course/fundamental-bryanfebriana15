// Javascript Link

function replaceName() {
  let name = prompt("Boleh tau nama anda?", "");
  document.getElementById("name").innerHTML = name
}

replaceName();

// Javascript Home Page
const myslide = document.querySelectorAll('.myslider'),
  dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter);
}
function plusslide(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentslide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function slidefun(n) {
  let i;
  for (i - 0; i < myslide.length; i++) {
    myslide(i).style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active');
  }
  if (n > myslide.lenght) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add('active');
}