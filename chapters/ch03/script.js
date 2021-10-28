// 3.1. Обзор и определения
    // в JS есть два типа, элементарные и ообъектные
    // элементарные это числа, строки, истенные булевые значения
    // null и undefined так же относятся к элементарным значения но они не числа и не строки или булевскими значениями
    // null и undefined представляет собой объект Object 
    // обыкновенный объект это неупорядоченная колекция именованных значений
    // вид объекта массив это упорядоченная колекция пронумерованных значений
    // нельзя вызывать методы лишь на значениях null и undefined
    // Объектные типы JavaScript являются изменяемыми, элементарные типы — неизменяемыми
    // Строки можно рассматривать как массивы символов


// 3.2. Числа
    console.log('3.2. Числа');

    // В JS если все числа от 
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(-9007199254740992);
    // И до
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(9007199254740992);

    // 3.2.1. Целочисленные литералы
        // JS распознает и шестнадцатеричные значения
        // Шестнадцатеричный литерал начинается с символов Ох или 0Х
        // за которыми следует строка шестнадцатеричных цифр
        // Шестнадцатеричная цифра — это одна из цифр от 0 до 9 или одна из
        // букв от а (или А) до f (или F), которые представляют значения от 10 до 15
        console.log(0xf);
        // В ES6 добавили поддержску двочных и восьмеричных чисел
        // двоичные 0b
        console.log(0b11111100101);
        // восьмеричная 0o
        console.log(0o3745);

    // 3.2.2. Числовые литералы с плавающей точкой
        // пример
        console.log(3,14);
        console.log(Math.PI);
        // Разделители в числовых литералах
        let overNumber = 3_333_333_333_333;     // для лучшего восприятия монжо использовать _
        console.log(overNumber);

    // 3.2.3. Арифметические действия в JavaScript
        // + для сложения
        console.log("сложения               ", 6 + 3);
        // - для вычетания
        console.log("вычетания              ", 6 - 3);
        // * для умножения
        console.log("умножения              ", 6 * 3);
        // / для деления
        console.log("деления                ", 6 / 3);
        // % для деления по модулю (получения остатка от деления)
        console.log("остатка от деления     ", 6 % 3);
        // ** воздведение в степень 
        console.log("воздведение в степень  ", 6 ** 3);

        // более сложные матем действия через через функции
        console.log("6 в 3 степени                      :", Math.pow(6,3));
        console.log("Округление до целого               :", Math.round(.6));
        console.log("Округление в большую сторону       :", Math.ceil(.6));
        console.log("Округление в меньшую сторону       :", Math.floor(.6));
        console.log("Абсолютная величина                :", Math.abs(-6));
        console.log("Наибольший арг                     :", Math.max(6,3,8));
        console.log("Наименьший арг                     :", Math.min(6,3,8));
        console.log("Случайное число                    :", Math.random());
        console.log("Число пи                           :", Math.PI);
        console.log("Основ натур логорифма              :", Math.E);
        console.log("Корень квадр 6                     :", Math.sqrt(2));
        console.log("Куб корень 6                       :", Math.pow(2, 1/3));
        console.log("Тригонометрия                      :", Math.sin(2));
        console.log("Натуральный логорифм               :", Math.log(10));
        console.log("Десятичный логорифм                :", Math.log(100));
        console.log("Двоичный логорифм                  :", Math.log(512));
        console.log("Math.E в кубе                      :", Math.exp(3));
        console.log("Кубический корень                  :", Math.cbrt(27));
        console.log("Квадр корень из сумм квадр         :", Math.hypot(3,4));
        console.log("Десятичный логорифм                :", Math.log10(100));
        console.log("Двоичный логорифм                  :", Math.log2(1024));
        console.log("Натуральный логорифм 1+5           :", Math.log1p(5));
        console.log("Инверсия 5-1                       :", Math.expm1(5));
        console.log("-1, 0 или 1                        :", Math.sign(6));
        console.log("Оптимизированное умножение         :", Math.imul(6,3));
        console.log("Количество ведущих нулевых бит     :", Math.clz32(0xf));
        console.log("преобразует в целое число          :", Math.trunc(3.9));
        console.log("Округляет до ближайшего 32-битного :", Math.fround(5.111));
        console.log("Гиперболический синус              :", Math.sinh(6));
        console.log("Гиперболический арксинус           :", Math.asinh(6));

        // Когда число больше возможного оно результат будет Infinity
        console.log("Самое большое число: ",Infinity);
        console.log("Number.MAX_SAFE_INTEGER < Infinity ", Number.MAX_SAFE_INTEGER < Infinity);
        // Тоже самое и с минимальными значениями

        // Деление на ноль в JavaScript ошибкой не является
        console.log('3/0:               ', 3/0);
        console.log('-3/0:              ',-3/0);
        // Исключение: ноль, деленный на ноль, не имеет четко определенного значения
        console.log('0/0:               ',0/0);
        // Так же будет (not-a-number) с не нечисловыми операндами которые не могут быть преобразованы в числа
        console.log('Infinity/Infinity: ',Infinity/Infinity);

        // Свойства Number определяются в ES6
        console.log('parselnt():                ', Number.parseInt('4'));
        console.log('parseFloat():              ', Number.parseFloat('5'));
        console.log('Является ли значение NaN:  ', Number.isNaN(0/0));                  // Возвращает true, если аргументом является NaN или аргумент имеет нечисловое значение
        console.log('Является ли конечным числ: ', Number.isFinite(5));                 // возвращает true, если аргумент представляет собой число, отличающееся от NaN, Infinity или -Infinity
        console.log('Целое число:               ', Number.isInteger(5.1));
        console.log('целым числом -(2**53) < х < 2**53: ', Number.isSafeInteger(5));
        console.log('Минимум:                   ', Number.MIN_SAFE_INTEGER);
        console.log('Максимум:                  ', Number.MAX_SAFE_INTEGER);
        console.log('Наименьшая разница:        ', Number.EPSILON);
        
        // Странности 0
        let zero11 = 0;             // Положительный 0
        let zero12 = -0;            // Отрицательный 0 
        console.log('0 === -0:              ', zero11 === zero12);         // => true
        console.log('Infinity == -Infinity: ', 1/zero11 === 1/zero12)      // => false

    //3.2.4. Двоичное представление чисел с плавающей точкой и ошибки округления
        // Чисел с плавающей точкой конечное количество (точнее 18 437 736 874 454 810 627 чисел)
        // Числа JavaScript обладают достаточной точностью и могут обеспечить очень
            //близкую аппроксимацию к 0.1
        // Пример
        let x = .3 - .2;
        let y = .2 - .1;
        console.log('x === y:   ',x === y);
        console.log('x === .1:  ',x === .1);
        console.log('y === .1:  ',y === .1);
        console.log('x:         ',x);
        console.log('y:         ',y);
    
    //3.2.5. Целые числа произвольной точности с использованием BigInt
        // Новейшее средство ES2020 числовой тип BigInt
        // По умолчанию они десятичные
            // но можно применять префиксы
            // 0b, Оo и Оx для двоичных, восьмеричных и шестнадцатеричных
        console.log('10-чное: ',2021n);
        console.log('2-чное:  ',0b11111100101n);
        console.log('8-чное:  ',0o3745n);
        console.log('16-чное: ',0x7E5n);

        // Преобразование в BigInt
        let q = BigInt(Number.MAX_SAFE_INTEGER);
        console.log(q);
        let stri = '1' + '0'.repeat(100);
        console.log(BigInt(stri));                  // => один гугол
        
        // Арифметические действия
        console.log("6n + 2n:           ", 6n + 2n);
        console.log("6n - 2n:           ", 6n - 2n);
        console.log("6n * 2n:           ", 6n * 2n);
        console.log("6n / 2n:           ", 6n / 2n);
        console.log("6n % 2n:           ", 6n % 2n);
        console.log("6n ** 2n:          ", 6n ** 2n);
        console.log("(2n ** 5n) - 1n:   ", (2n ** 5n) - 1n);

        // Нельзя совмещать разные типы операндов т.е. делать как показано ниже
        //console.log(6n / 2);      // => mix BigInt ошибка
        //console.log(6 / 2n);      // тоже самое

        // Сравнение обыченого числа с BigInt
        console.log("2 == 2n:           ",2 == 2n);         // => true
        console.log("2 === 2n:          ",2 === 2n);        // => false так как проверка по типам

    // 3.2.6. Дата и время
        // Время отсчитывается с 1 января 1970 года
        let timestamp = Date.now();
        let now  = new Date();
        let ms = now.getTime();
        let iso = now.toISOString();
        console.log('Текущее время числом: ', timestamp);
        console.log('Текущее время объект: ', now);
        console.log('Преобразованное время в миллисекунды: ', ms);
        console.log('В Строку стандарт формата: ', iso);
// 3.3. Текст
    // JavaScript использует кодировку UTF-16 набора символов Unicode
    // Строка это по сути проидексованный массив

    // 3.3.1. Строковые литералы
        // Запись строки
        let strPrim1 = 'Запись строки пример 1',
            strPrim2 = "Запись строки пример 2",
            strPrim3 = `Запись строки пример 3`;
        
        // \n - символ новой строки
        console.log('Привет\nдруг');
    
    // 3.3.2. Управляющие последовательности в строковых литералах
        console.log('Пр\'ивет');            // Симво апострофа
        console.log('\xA9');                // так можно ставить иникоды символы

    // 3.3.3. Работа со строками
        // конкатенация строк
        let strPrim4 = 'Привет ' + 'друг';
        let strPrim5 = strPrim4 + ', как твои дела?';
        console.log(strPrim5);

        // строки можно сравнить, но равны они будут если они в точности одинаковые
        console.log("'привет' == 'привет': ", 'привет' == 'привет');      // true
        console.log("'привет' == 'привет': ", 'привет' == 'Привет');      // false - так как сравниваются юникоды у п и П они разные
        console.log("'привет' > 'привет':  ", 'привет' > 'привет');      // false
        console.log("'привет' > 'привет':  ", 'привет' > 'Привет');      // true - так как у п уникод больше чем у П

        // Длина строки
        console.log('Привет: ', 'Привет'.length);

        // API - для работы со строками
        let strH = 'Привет, мир!';

        // Получение элементов из строки
        console.log(strH.substring(1,4));
        console.log(strH.slice(1,4));
        console.log(strH.slice(-3));
        console.log(strH.split(', '));

        // Поиск в строке
        console.log(strH.indexOf('и'));
        console.log(strH.indexOf('и', 3));
        console.log(strH.indexOf('zz'));
        console.log(strH.lastIndexOf('р'));

        // булевый поиск ES6
        console.log(strH.startsWith('мир'));
        console.log(strH.endsWith('!'));
        console.log(strH.includes('ет'));

        // Создание модиф версий строкий
        console.log(strH.replace('ет', 'ат'));
        console.log(strH.toLowerCase());
        console.log(strH.toUpperCase());
        console.log(strH.normalize());
        console.log(strH.normalize('NFD'));         // 'NFC' 'NFKC' 'NFKD'

        // Инспектирование симвовлов строки
        console.log(strH.charAt(1));
        console.log(strH.charAt(strH.length-1));
        console.log(strH.charCodeAt(0));
        console.log(strH.codePointAt(0));

        // Функции строк ES2017
        console.log('строка'.padStart(10));
        console.log('строка'.padEnd(10));
        console.log('строка'.padStart(10, '*'));
        console.log('строка'.padEnd(10, '*'));

        // Функция усечения прбелов .trim() ES5 -> ES2019
        console.log(' тест '.trim());
        console.log(' тест '.trimStart());
        console.log(' тест '.trimEnd());
        console.log(' тест '.trimRight());

        // смешнанные методы строк
        console.log(strH.concat('Yes'));
        console.log(strH.repeat(3));

        // строки в JavaScript неизменяемы
        // методы возвращают новые строки они не модифицируют строку

    // 3.3.4. Шаблонные литералы
        
        


