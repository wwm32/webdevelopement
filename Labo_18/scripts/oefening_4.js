const listItems = document.querySelectorAll('li');
const body = document.querySelector('body');
for(let i= 0; i<listItems.length; i++) {
    listItems[i].className = 'listItem';
}

const foto = document.createElement("img");
foto.setAttribute("src","photos/chips.jpg");
body.appendChild(foto);