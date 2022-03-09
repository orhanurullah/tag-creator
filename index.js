const body = document.body;
const wrapper = document.getElementById("wrapper");
const todo = document.getElementById("todo");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

const data = document.getElementById("input");
const show = document.getElementById("show");
const panel = document.getElementById("panel");

const bgcolor = document.getElementById("bgcolor");
console.log(body.style.backgroundColor);
window.addEventListener("load", function () {
  let newColor = window.getComputedStyle(body).backgroundColor;
  bgcolor.style.backgroundColor = newColor;
  bgcolor.value = newColor;
});

const randomButton = document.getElementById("random");
const selectorColors = document.getElementById("colors");

//SelectColor
const selectColor = () => {
  const colors = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "orange",
    "aliceblue",
    "antiquewhite",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "blanchedalmond",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornslik",
    "crimson",
    "cyan",
    "darkblue",
    "darkolivegreen",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkhaki",
    "darkmagenta",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "limegreen",
    "linen",
    "magenta",
    "mediumaquamarine",
    "mediumblue",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "oldlace",
    "olivedrab",
    "oragered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palveioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "skyblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "whitesmoke",
    "yellowgreen",

  ];
  for (let i = 0; i < colors.length; i++) {
    const newElement = document.createElement("option");
    newElement.classList.add("new-color");
    newElement.setAttribute("id", colors[i]);
    newElement.setAttribute("value", colors[i]);
    newElement.style.backgroundColor = colors[i];
    newElement.style.textAlign = "center";
    if(colors[i] == "black"){
        newElement.style.color = "white";
    }
    newElement.innerText = colors[i];
    selectorColors.appendChild(newElement);
  }
};
//split color
const splitColor = (newColor) => {
  const regex = /[0-9]{1,3}/gm;
  const colorArr = [];
  let m;

  while ((m = regex.exec(newColor)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    colorArr.push(m);
  }
  return colorArr;
};
//change background color function
const changeColor = () => {
  let color = bgcolor.value;
  body.style.backgroundColor = color;
  bgcolor.style.backgroundColor = color;
  const colors = splitColor(color);
};

let a = 0;
// Create P Element
const createElement = (type) => {
  let elementName = data.value;
  if (!elementName) {
    return null;
  }
  let message = elementName + " element is in added. Element No: " + a;
  let element = document.createElement(elementName);
  if (elementName === "ol" || elementName === "ul") {
    let itemElement = document.createElement("li");
    element.appendChild(itemElement);
    itemElement.innerText = message;
  } else {
    element.innerText = message;
  }
  element.classList.add(elementName + "" + a);
  element.setAttribute("id", elementName + "" + a++);
  if (type === 1) {
    todo.appendChild(element);
  } else {
    todo.insertBefore(element, todo.firstChild);
  }
  element.style.cursor = "pointer";
  element.addEventListener("dblclick", function () {
    let val = element.innerText;
    element.innerHTML = "";
    let del = document.createElement("del");
    del.setAttribute("id", "del" + a);
    element.appendChild(del);
    del.innerText = val;
  });
  element.addEventListener("contextmenu", deleteSingleElement);
};
const showValue = show.innerText;
const showPanel = () => {
  if (panel.style.display !== "block") {
    panel.style.display = "block";
    show.innerText = "Close the Explanation";
  } else {
    panel.style.display = "none";
    show.innerText = showValue;
  }
  console.log(panel.classList);
};

//Delete Single Element
const deleteSingleElement = () => {
  event.preventDefault();
  todo.removeChild(event.target);
};

//Delete All P Elements Function
const AllElementsRemove = () => {
  a = 0;
  while (todo.hasChildNodes()) {
    todo.removeChild(todo.firstChild);
  }
};
// Delete Only Text Stroke Elements Function
const onlyStrokeElementsRemove = () => {
  let dels = document.getElementsByTagName("del");
  let elements = new Array();
  for (let i = 0; i < dels.length; i++) {
    elements.push(dels[i].parentElement);
  }
  elements.map((e) => e.remove());
};

// Delete From First Function
const deleteElement = (type) => {
  if (type === 1) {
    todo.removeChild(todo.firstChild);
  } else {
    todo.removeChild(todo.lastChild);
  }
};

//Change Background Color As Random Function
const randomChangeBackgroundColor = () => {
  const first = Math.floor(Math.random() * 255);
  const second = Math.floor(Math.random() * 255);
  const third = Math.floor(Math.random() * 255);
  console.log(first + " " + second + " " + third);
  body.style.backgroundColor = "rgb(" + [first, second, third].join(",") + ")";
  bgcolor.value = window.getComputedStyle(body).backgroundColor;
  bgcolor.style.backgroundColor = bgcolor.value;
};

/**
 * Listeners
 */

window.addEventListener("load", () => selectColor());
//Add Element to Last
button.addEventListener("click", () => createElement(1));
//Add Element to First
button4.addEventListener("click", () => createElement(0));
//Delete All Elements
button2.addEventListener("click", AllElementsRemove);
//Delete First Element
button5.addEventListener("click", () => deleteElement(1));
//Delete Last Element
button6.addEventListener("click", () => deleteElement(0));
//Delete Only Text Stroke Elements
button3.addEventListener("click", onlyStrokeElementsRemove);

//show listener
show.addEventListener("click", showPanel);

//change background color
bgcolor.addEventListener("change", changeColor);

//change background color as random
randomButton.addEventListener("click", randomChangeBackgroundColor);

selectorColors.addEventListener("change", function (e) {
  let color = e.target.value;  
  body.style.backgroundColor = color;
  bgcolor.value = window.getComputedStyle(body).backgroundColor;
  bgcolor.style.backgroundColor = bgcolor.value;
  selectorColors.style.backgroundColor = e.target.value;
  if(color === "black"){
    selectorColors.style.color = "white";
  }else{
      selectorColors.style.color = "black";
  }
});
