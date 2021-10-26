// Глава 2
// Лексическая структура
// 2.1. Текст программы JavaScript

console.log('2.1. Текст программы JavaScript');
{
    // js чувствителен к регистру
    console.log('while == While :', 'while' == 'While' );
    console.log('while == while :', 'while' == 'while' );
}


console.log('');console.log('');
// 2.2. Комментарии
console.log('2.2. Комментарии');
{
    // в JS есть два стиля коментариев
    // первый стиль
    /* второй
    стиль */
}


console.log('');console.log('');
// 2.3. Литералы
console.log('2.3. Литералы');
{
    console.log(12);                // Число двенадцать
    console.log(1.2);               // Число одна целая и две десятых
    console.log("hello world");     // Строка текста
    console.log('Hi');              // Еще одна строка
    console.log(true);              // Булевское значение
    console.log(false);             // Другое булевское значение
    console.log(null);              // Отсутствие объекта
}


console.log('');console.log('');
// 2.4. Идентификаторы и зарезервированные слова
console.log('2.4. Идентификаторы и зарезервированные слова');
{
    let $id
    let _id
    let id
    let i_d
    let i1d
    let i

    console.log('');
    console.log('2.4.1. Зарезервированные слова');
    console.log('as const export get null target void async continue extends if of this while await debugger false import return throw with break default finally in set true yield case delete for instanceof static try catch do from let super typeof class else function new switch var');
    console.log('Зарезервинованны но могут быть скоро доступны');
    console.log('enirni implements interface package private protected public');
}


console.log('');console.log('');
// 2.5. Unicode
console.log('2.5. Unicode');
{
    const π = 3.14;
    const si = true;
    console.log('π  :', π);
    console.log('si :', si);

    // 2.5.1. Управляющие последовательности Unicode
    console.log('2.5.1. Управляющие последовательности Unicode');
    let cafÉ = 'Hi';
    console.log(caf\u00C9);
    console.log(caf\u{C9});
    // в ES6 ввели поддержку эмодзи
    console.log("\u{1F600}");

    // 2.5.2. Нормализация Unicode
        // можно написать похожие слова но они будут различаться кодировкой
}


console.log('');console.log('');
// 2.6. Необязательные точки с запятой
console.log('2.6. Необязательные точки с запятой');
{
  let a = 1     // так как операторы на разных строках ; можно пропустить
  let b = 2;

  let c = 3; let d = 4;     // при такой записи ; обязательно

  let e
  e
  =
  5
  console.log(e);     // => 5 интерпретатор прочитал код как let а; а = 3; console.log(а);

  let w = 10, r = 11;

  let q = w + r;    // без ; ошибка
  (a+b).toString()    // let q = w + r (a+b).toString();

  // если оператор начинается с (, [, /, + или -, то есть шанс,
  // что он может интерпретироваться как продолжение предыдущего оператора

  // некоторые программисты помещать защитную точку с запятой в начале любого такого оператора
  let t = 1                               // Точка с запятой здесь опущена
  ;[t,t+1,t+2].forEach(console.log)       // Защитная ; сохраняет этот оператор отдельно

  // Есть три исключения из общего правила
  // Первое исключение касается операторов return , throw, yield , break и continue
  let u = () => {
    return 
    true;
  }
  console.log(u());     // => undefined так как перенос строки после return интерпретатор вопринимает как ; то есть return; true;

  // Второе исключение затрагивает операции ++ и --
  // они должны находиться там же где и оператор к которам они применяются

  // конец 2 главы 
  console.log('End');
}