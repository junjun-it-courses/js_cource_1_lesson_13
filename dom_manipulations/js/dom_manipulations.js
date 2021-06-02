// Создаёт новый элемент с заданным тегом:
// document.createElement(tagName);

// let div = document.createElement('div');
// console.log(div)


// Создаёт новый текстовый узел с заданным текстом:
// let textNode = document.createTextNode('А вот и я')
// console.log(textNode);

// Создание сообщения

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// console.log(div);

// Методы вставки

// node.append - добавляет узлы или строки в конец node
// document.body.append(div)
// setTimeout(function () {
//     document.body.append(div)
// }, 1000)


// node.prepend - вставляет узлы или строки в начало node
// document.body.prepend(div)
// setTimeout(function () {
//     document.body.prepend(div)
// }, 2000)

// node.before - вставляет узлы или строки до node
// document.body.before(div)

// node.after - вставляет узлы или строки после node,
// document.body.after(div)

// node.replaceWith - заменяет node заданными узлами или строками.
// document.body.replaceWith(div)
// setTimeout(function () {
//     document.body.replaceWith(div)
// }, 2000)

// Для удаления узла есть методы  - node.remove()
// setTimeout(function () {
//     div.remove()
// } , 5000);

// Все методы вставки автоматически удаляют узлы со старых мест.


// Клонирование узлов - cloneNode
const div = document.querySelector('div.alert');
console.log(div)

let div2 = div.cloneNode(true); // клонировать сообщение
div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент
setTimeout(function () {
    div.after(div2);
}, 1000)
