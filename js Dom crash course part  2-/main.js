// EXAMIN THE Document OBJECT//

// console.dir(document);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.domain);
// console.log(document.titte);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all)
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images)
// console.log (document.getElementById('main-header'));
// var mainheader = document.getElementById('main-header');
// console.log(mainheader);
// mainheader.textContent = 'Hello';
// mainheader.innerText = 'Goodbye';

// mainheader.innerHTML = '<h3>Hello</h3>';

// mainheader.style.borderBottom = 'solid 3px #000';
// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontweight = 'bold';
// items[1].style.background = 'yellow';

// items.style.backgroundcolor = '#green';

// var li = document.getElementsByTagName('li');
// // console.log(items);
// console.log(li[1]);

// li[1].textContent = 'Hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.background = 'yellow';


// var header = document.querySelector('#main-header');
// header.style.borderbottom = 'solid 4px #ccc'

// var input = document.querySelector(input);
// input.value ='Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value= "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastitem = document.querySelector
// ('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector
// ('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';


// .querySelectorAll//

// var titles = document.querySelectorAll('.title');

// console.log (titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.background = '#f4f4f4';
//     even[i].style.background = '#ccc';
// }

// TARVERSING THE DOM //

var itemList = document.querySelector('#items');

// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode );


// // parentElement //
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = '#f4f4f4';
// console.log(itemList.parentElement.parentNode.parentElement );

// childNode  //
// console.log(itemList.childNodes);
// itemList.parentElement.style.background = '#f4f4f4';
// console.log(itemList.parentElement.parentNode.parentElement );

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background = 'yellow';

// // Firstchild //
// console.log (itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 2';


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background = 'yellow';

// Lastchild //
// console.log (itemList.lastChild);

// LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling //
// console.log(itemList.nextSibling);

// // nextElementsibling //
// console.log(itemList.nextElementSibling);

// previousSibling //
// console.log(itemList.previousSibling);

// previousElementSibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// create Element //

// create a div //
var newDiv = document.createElement ('div');


// Add class //
newDiv.className ='Hello';
// console.log(newDiv);


// Add  id //
newDiv.id = 'Hello 2';
// console.log(newDiv);

// Add Attr
newDiv.setAttribute('tittle','Hello Dev');

// create a textNode //
var newDivText = document.createTextNode('Hello world');

// Add text to div //
newDiv.appendChild(newDivText);
var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize ='30px';

console.log(newDiv);
container.insertBefore(newDiv,h1);
