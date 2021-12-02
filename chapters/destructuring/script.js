// Деструктуризация массива - это уникальный метод, который позволяет аккуратно извлекать значение массива в новые переменные

// без использования метода присваивания деструктуризации массива, вы должны скопировать значение массива в новую переменную следующим образом
const names = ['Alex', 'Ruslan', 'Roman'];
const name1 = names[0];
const name2 = names[1];
const name3 = names[2];
console.log(name2);

// а теперь с деструктуризацией
const nums = [55, 22, 77];
const [num1, num2, num3] = nums;
console.log(num2);

// прямая деструктуризация массива
const [color1, color2, color3] = [
    'red', 'yellow', 'blue'
];
console.log(color2);

// использование деструктуризации с отделенным объявление объекта от присвоений
let firstName, lastName, website;
[firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(lastName);

// rest и деструктуризация
const [one, ...two] = ['Ivan', 'Masha', 'Dasha'];
console.log(two);
// rest всегда использовать последним

const [, , website2] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(website2);

// значения по умолчанию в деструктуризации
const [firstName3 = "Tobi", website3 = "CodeSweetly"] = ["Oluwatobi"];
console.log(firstName3, website3);

// деструктуризацию массива для обмена значениями переменных
let x = 7, y = 9;
console.log(x, y);
[x,y] = [y,x];
console.log(x, y);

// деструктуризацию массива для извлечения значений из массива в параметры функции
let cord = [6, 1];
function sum([x, y]) {
    console.log(x + y);
};
sum(cord);


// деструктуризация объектов
// Извлечение без деструктуризации
{
    const names = {
        name1: 'Alex',
        name2: 'Ruslan',
        name3: 'Roman'
    };
    const name1 = names.name1;
    const name2 = names.name2;
    const name3 = names.name3;
    console.log(name2);
}

// а теперь с ней
{
    const names = {
        name1: 'Alex',
        name2: 'Ruslan',
        name3: 'Roman'
    };
    const { name1: nam1, name2: nam2 } = names;
    console.log(nam1, nam2);
}
// так же сокращенный способ
{
    const names = {
        name1: 'Alex',
        name2: 'Ruslan',
        name3: 'Roman'
    };
    const { name1, name2 } = names;
    console.log(name1, name2);
}

// использование деструктуризации объекта, когда имя свойства отличается от имени переменной
{
    const names = {
        name1: 'Alex',
        name2: 'Ruslan',
        name3: 'Roman'
    };
            //1     2           1-значение объекта 2-переменная
    const { name1: nam1, name2: nam2 } = names;
    console.log(nam1, nam2);

    const {name3: nam3 } = names;
    // тоже самое что и
    const dubleName3 = names.name3;
    console.log('деструктуризация     : ', nam3);
    console.log('обычное присваивание : ', dubleName3);
}

// пример в сложенными объектами
{
    const obj = {
        x: {y:1}
    }
    const {x: {y:cordY}} = obj;
    console.log('Вложенный объект     : ',cordY);
}

// прямое деструктурирование объекта
{
    const {x, y, z} = {
        x: 4,
        y: 7,
        z: 11
    }
    console.log(x, y, z);
}

// деструктуризацию объекта, отделяя объявления переменных от их присвоений

// деструктуризацию объекта для присвоения остальной части объекта переменной

// значения по умолчанию в назначении деструктуризации объекта

// деструктуризацию объекта для обмена значениями

// деструктуризацию объекта для извлечения значений из свойств в параметры функции

// вызов функции, содержащую разрушенные параметры, без предоставления аргументов