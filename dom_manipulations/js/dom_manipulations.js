// Создаёт новый элемент с заданным тегом:
// document.createElement(tagName);

// let div = document.createElement('div');


// Создаёт новый текстовый узел с заданным текстом:
// let textNode = document.createTextNode('А вот и я')

// Создание сообщения

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";


// Методы вставки

// node.append - добавляет узлы или строки в конец node
// document.body.append(div)

// node.prepend - вставляет узлы или строки в начало node
// document.body.prepend(div)

// node.before - вставляет узлы или строки до node
// document.body.before(div)

// node.after - вставляет узлы или строки после node,
// document.body.after(div)

// node.replaceWith - заменяет node заданными узлами или строками.
// document.body.replaceWith(div)


// Для удаления узла есть методы  - node.remove()
// setTimeout(() => div.remove(), 1000);

// Все методы вставки автоматически удаляют узлы со старых мест.


// Клонирование узлов - cloneNode
// let div2 = div.cloneNode(true); // клонировать сообщение
// div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент
//
// div.after(div2);