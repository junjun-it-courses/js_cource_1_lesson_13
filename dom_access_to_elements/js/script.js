const div = document.getElementById('my-div');

// div.setAttribute('user', 'alex')
// console.log(div.className = 'hello div ')


const listItems = document.getElementsByClassName('list-numerable');

//
// for(let i = 0; i <= listItems.length-1; i++) {
//     if(listItems[i].nodeName === 'LI') {
//         listItems[i].innerHTML = 'Item '+ (i + 1);
//     }
// }
//
// console.log(listItems);


const listItemsAll = document.getElementsByTagName('li');

// for(let i = 0; i <= listItemsAll.length-1; i++) {
//     if(listItemsAll[i].parentElement.nodeName === 'UL') {
//         listItemsAll[i].style.backgroundColor = 'pink';
//         listItemsAll[i].innerHTML += ' - UL'
//     }
//
//     if(listItemsAll[i].parentElement.nodeName === 'OL') {
//         listItemsAll[i].style.backgroundColor = 'red';
//         listItemsAll[i].innerHTML += ' - 0L'
//     }
// }
//
// console.log(listItemsAll)


const querySelector = document.querySelector('#my-div');
// console.log(querySelector)


const querySelectorAll = document.querySelectorAll('ul li');
// console.log(querySelectorAll)


const querySelectorAll2 = document.querySelectorAll('[data-custom]');
//
// console.log(querySelectorAll2)


const querySelectorAll3 = document.querySelectorAll('ol li:nth-child(even)');
// console.log(querySelectorAll3)
