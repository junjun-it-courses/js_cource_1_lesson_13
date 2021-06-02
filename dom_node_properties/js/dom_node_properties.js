let body = document.body;
let startNode = body.firstElementChild // document.body.firstElementChild
console.log(startNode)


// Свойство nodeType позволяет узнать тип DOM-узла.
// Его значение – числовое: 1 для элементов, 3 для текстовых узлов,
// и т.д. Только для чтения.

// console.log(body.childNodes)
// console.log('nodeType', startNode.nodeType);
//
// for(let node of body.childNodes) {
//     if(node.nodeType === 1) {
//         node.style.backgroundColor = 'red';
//     }
// }


// nodeName/tagName озвращает название тега в ВЕРХНЕМ РЕГИСТРЕ
// console.log('nodeName', startNode.nodeName)
//
// for(let node of body.childNodes) {
//     if(node.nodeName === 'DIV') {
//         node.style.backgroundColor = 'green';
//     }
//
//     if(node.nodeName === 'UL') {
//         node.style.backgroundColor = 'pink';
//     }
// }


//innerHTML - Внутреннее HTML-содержимое узла-элемента. Можно изменять.
// console.log('innerHTML', startNode.innerHTML)

// setTimeout(function () {
//     startNode.innerHTML = '<b>Hello</b> world !';
// }, 4000);

// if(startNode.innerHTML !== '') {
//     console.log('Start node не пустой 1')
// } else {
//     console.log('Start node пустой 1')
// }
//
// if(startNode.innerHTML.length) {
//     console.log('Start node не пустой 2')
// } else {
//     console.log('Start node пустой 2')
// }



// outerHTML - возвращает весь html преобразовав его в строку
// console.log('innerHTML', startNode.innerHTML)
// console.log('outerHTML', startNode.outerHTML)


// nodeValue/data - Содержимое узла-неэлемента (текст, комментарий). Эти свойства практически одинаковые,
// обычно мы используем data. Можно изменять.
// console.log(body.childNodes)
// console.log('data', startNode.data)

// for(let node of body.childNodes) {
//     if(node.nodeType === 3) {
//         console.log(node.data)
//     }
// }


// textContent - Текст внутри элемента: HTML за вычетом всех <тегов>
// console.log('innerHTML', startNode.innerHTML)
// console.log('innerText', startNode.innerText)
// console.log('textContent', startNode.textContent)


// hidden - Когда значение установлено в true, делает то же самое,
// что и CSS display:none.
// console.log('hidden', startNode.hidden)
// startNode.hidden = true;
// console.log('hidden', startNode.style.display = 'none')

// setInterval(function () {
//     if(startNode.style.display === 'none') {
//         startNode.style.display = 'block';
//     } else {
//         startNode.style.display = 'none'
//     }
// }, 1000)