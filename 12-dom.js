console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);
console.log(list.firstChild);
console.log(firstListItem.nextElementSibling);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);

console.log(list.parentNode);

///////////////// ID

const listWithId = document.querySelector('#list')
listWithId.firstElementChild.style.textTransform = 'uppercase'
console.log(listWithId);

////////// class

const listItemWithClass = document.querySelector('.list-item')
listItemWithClass.style.fontSize = '30px'

///////////// By Tag Name

const menuItemsByTagName = document.querySelector('p');
menuItemsByTagName.style.color = 'pink'

//////////////  
const itemWithClass = document.querySelector('.span');
itemWithClass.style.backgroundColor = 'green';

console.log(document.querySelectorAll('.span'));



/////////////// Properties and attributes

const img = document.querySelector('.image');
console.log(img.src) /// https://picsum.photos/id/9/320/240
console.log( img.alt) /// A laptop

img.src = "https://picsum.photos/id/13/640/480";
img.alt = "River bank";


////  textContent​

const textEl = document.querySelector('.article-title');
console.log(textEl.textContent)
textEl.textContent = 'Welcome to Bahamas!'


////////  classList​

const link = document.querySelector(".link");
console.log(link.classList);
console.log(link.textContent);
console.log(link.classList.contains('is-active'));
link.classList.toggle('is-active');

link.classList.add('special')
console.log(link.classList);

///////////  style​

const btn = document.querySelector('.btn')
btn.style.backgroundColor = "teal";
btn.style.fontSize = '30'
btn.style.textAline = 'center';
console.log(btn.style);


///////////// attributes

console.log(img.attributes);

console.log(img.setAttribute("alt", "Amazing nature"))
console.log(img.getAttribute('alt')); /// Amazing nature
console.log(img.hasAttribute('src')) /// true


/////////// data-attributes

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // save


//////////////  Creating and deleting items

const heading = document.createElement("h1")
heading.textContent = " This is a new picture"

const image = document.createElement("img");
image.src = "https://picsum.photos/id/9/320/240";
image.alt = "A laptop";
image.width = "300";

link.after(heading, image);

// heading.remove();