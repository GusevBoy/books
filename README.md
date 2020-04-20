## Задание

1. В файле books_redux_module.js хранится как initialState список книг.
   Вам нужно вывести этот список книг используя Redux в файле Books.jsx, там где стоит комментарий "Вывести список здесь".

   #### Примечание: Для отображения одного элемента из массива книг можно использовать файл BookItem.jxs, но это необязательно.

2. Необходимо реализовать логику, при которой, после ввода в инпут названия или части названия (в файле Books.jsx) и при нажатии на кнопку "поиск", в модуле редакса с книгами (файл books_redux_module.js) фильтруется список книг по указанной строке из инпута (например, если вводим "кар" и нажимаем на поиск, то в списке остаются книги "Малыш и Карлсон" и "Братья Карамазовы" )

3. Если мы очищаем инпут, то автоматически (без нажатия на кнопку поиск) отображается весь список книг
