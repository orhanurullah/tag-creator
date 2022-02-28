const todo = document.getElementById("todo");
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');

const data = document.getElementById('input');
const show = document.getElementById('show');
let a = 0;
// Create P Element
const createElement = (type) => {
    let elementName = data.value;
    if(!elementName){
        return null;
    }
    let message = elementName + " element is in added. Element No: " + a;
    let element = document.createElement(elementName);
    if(elementName === "ol" || elementName === "ul"){
        let itemElement = document.createElement("li");
        element.appendChild(itemElement);
        itemElement.innerText = message;
    }else{
        element.innerText = message;
    }
    element.classList.add(elementName+""+a);
    element.setAttribute('id', elementName+""+(a++));
    if(type === 1){
        todo.appendChild(element);
    }else{
        todo.insertBefore(element, todo.firstChild);
    }
    element.style.cursor="pointer";
    element.addEventListener('dblclick',function(){
       let val = element.innerText;
       element.innerHTML = "";
       let del = document.createElement('del');
       del.setAttribute('id', 'del' + a);
       element.appendChild(del);
       del.innerText = val;
    });
    element.addEventListener('contextmenu', deleteSingleElement);
}

//Delete Single Element
const deleteSingleElement = () => {
    event.preventDefault();
    todo.removeChild(event.target);
}

//Delete All P Elements Function
const AllElementsRemove = () => {
    a = 0;
    while(todo.hasChildNodes()){
       todo.removeChild(todo.firstChild);
    }
};
// Delete Only Text Stroke Elements Function
const onlyStrokeElementsRemove = () => {
   let dels = document.getElementsByTagName('del');
   let elements = new Array();
   for(let i = 0; i < dels.length; i++){
        elements.push(dels[i].parentElement);
   }
   elements.map(e => e.remove())
};

// Delete From First Function
const deleteElement = (type) => {
    if(type === 1){
        todo.removeChild(todo.firstChild);
    }else{
        todo.removeChild(todo.lastChild);
    }
};

/**
 * Listeners
 */

//Add Element to Last
button.addEventListener('click', () => createElement(1));
//Add Element to First
button4.addEventListener('click', () => createElement(0));
//Delete All Elements 
button2.addEventListener('click', AllElementsRemove);
//Delete First Element
button5.addEventListener('click', () => deleteElement(1));
//Delete Last Element
button6.addEventListener('click', () => deleteElement(0));
//Delete Only Text Stroke Elements
button3.addEventListener('click', onlyStrokeElementsRemove);