// Date
let day = document.getElementById("day"),
  month = document.getElementById("month");
sup = document.getElementById("sup");

const date = new Date(),
  d = date.getDate(),
  y = date.getFullYear(),
  mth = date.getMonth();

day.innerHTML = d;

switch (d) {
  case (1, 21, 31):
    sup.innerHTML = "st";
    break;
  case (2, 22):
    sup.innerHTML = "nd";
    break;
  case (3, 23):
    sup.innerHTML = "rd";
    break;

  default:
    sup.innerHTML = "th";
    break;
}

switch (mth) {
  case 0:
    month.innerHTML = "Jan";
    break;
  case 1:
    month.innerHTML = "Feb";
    break;
  case 2:
    month.innerHTML = "Mar";
    break;
  case 3:
    month.innerHTML = "Apr";
    break;
  case 4:
    month.innerHTML = "May";
    break;
  case 5:
    month.innerHTML = "Jun";
    break;
  case 6:
    month.innerHTML = "Jul";
    break;
  case 7:
    month.innerHTML = "Aug";
    break;
  case 8:
    month.innerHTML = "Sept";
    break;
  case 9:
    month.innerHTML = "Oct";
    break;
  case 10:
    month.innerHTML = "Nov";
    break;
  case 11:
    month.innerHTML = "Dec";
    break;

  default:
    month.innerHTML = "J - D";
    break;
}

// Time
const hrs = document.getElementById("hrs"),
  min = document.getElementById("min"),
  sec = document.getElementById("sec");

setInterval(() => {
  const date = new Date();
  const h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();

  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s < 10 ? `0${s}` : s;
}, 1000);

// Bg change
const img = [
  'url("./assets/images/3d_landscape_10.jpg")',
  'url("./assets/images/island.jpg")',
  'url("./assets/images/autumn_scene_3.jpg")',
  'url("./assets/images/backgroundland12.jpg")',
  'url("./assets/images/BigBend.jpg")',
  'url("./assets/images/dessert2.jpg")',
  'url("./assets/images/fall.jpg")',
];

setInterval(() => {
  const i = Math.floor(Math.random() * img.length);

  const divider = document.getElementById("divider");

  switch (i) {
    case 0:
      divider.style.backgroundColor = "white";
      break;
    case 1:
      divider.style.backgroundColor = "grey";
      break;
    case 2:
      divider.style.backgroundColor = "red";
      break;
    case 3:
      divider.style.backgroundColor = "white";
      break;
    case 4:
      divider.style.backgroundColor = "red";
      break;
    case 5:
      divider.style.backgroundColor = "lightblue";
      break;
    case 6:
      divider.style.backgroundColor = "grey";
      break;

    default:
      divider.style.backgroundColor = "white";
      break;
  }

  getComputedStyle(document.documentElement).getPropertyValue("--img");
  document.documentElement.style.setProperty("--img", img[i]);
}, 2500);

// Icon toggle
const icon = document.getElementById("icon");
const modal = document.getElementById("modal");
let open = true;

icon.addEventListener("click", () => {
  open === false ? (modal.style.left = "-250px") : (modal.style.left = "80px");
  open = !open;
});

// links
const link1 = document.getElementById("link1"),
  link2 = document.getElementById("link2"),
  link3 = document.getElementById("link3"),
  link4 = document.getElementById("link4");

link1.addEventListener("click", linkIt);
link2.addEventListener("click", linkIt);
link3.addEventListener("click", linkIt);
link4.addEventListener("click", linkIt);

function linkIt() {
  open = true;
  modal.style.left = "-250px";
}
