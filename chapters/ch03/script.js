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
        console.log('parseInt():                ', Number.parseInt('4'));
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
        // в ES6 добавили обратные ковычки ``
        // в них с поощью ${} можно интерпретировать JS код

        //Теговые шаблонные литералы
            // в ES6 есть функция String.raw() она возвращает текст в обратных ковычках таким какой он есть
            console.log(`Привет,\nдруг!`.length);
            console.log(String.raw`Привет,\nдруг!`.length);         // круглые скобки не нужны
    // 3.3.5. Сопоставление с шаблонами
        // регулярные выражения (regular expression, или RegExp)
        /^HTML/;
        /[1-9][0-9]*/;
        /\bjavascript\b/i;

        let textRE = 'testing fun: 1, 2, 3';                // Пример текста
        let pat = /\d+/g;                                   // все цыфры
        console.log(pat.test(textRE));                      // проверка на совпадения
        console.log(textRE.search(pat));                    // позиция первого совпадения
        console.log(textRE.match(pat));                     // совпадения в массиве
        console.log(textRE.replace(pat, '*'));              // замена найденных цыфр
        console.log(textRE.split(/\D+/));                   // разбить по цыфровым символам


// 3.4. Булевские значения - 63
    // Любое значение JavaScript может быть преобразовано
    // в булевское значение.
    // Работают подобно false:  undefined  null  0  -0  NaN  ''
    // все остальное работает как true
    
    // Булевские значения имеют метод toString() для преобразования в строки
    console.log(true, true.toString());

    // && - И
    // || - или
    // ! - не


// 3.5. null и undefined
    // null — это ключевое слово языка указывает на отсутсвие значения
    // null — это тоже указывает на отсутсвие значения
        // значение переменных, которые не были инициализированы
    console.log(null == undefined);
    console.log(null === undefined);
    // Предроложение что 
        // undefined представления системного, непредвиденного или похожего на ошибку отсутствия значения
        // null — представления программного, нормального или ожидаемого отсутствия значения.
    

// 3.6. Тип Symbol
    // Символы были введены в ES6
    // Именами свойств можно использовать символы с ES6
    let strname = 'string name';
    let symname = Symbol('propname');
    console.log(strname, typeof strname);
    console.log(symname, typeof symname);

    let o = {};
    o[strname] = 1;
    o[symname] = 2;
    console.log(o[strname]);
    console.log(o[symname]);
    console.log(o);

    // ВызовSymbol () два раза с той же самой строкой даст два совершенно разных значения Symbol
        console.log(Symbol('Sym_x') == Symbol('Sym_x'));

    // toString() — единственный интересный метод в экземплярах Symbol

    // функция Symbol.for() - возвращает то же самое значение, когда вызывается с одной и той же строкой
        let s = Symbol.for('shared');
        let t = Symbol.for('shared');
        console.log(s === t);
        console.log(s.toString());
        console.log(Symbol.keyFor(t));


// 3.7. Глобальный объект
    // Когда интерпретатор JavaScript запускается или всякий раз,
    // когда веб-браузер загружает новую страницу он создает новый глобальный объект
    // и предоставляет ему начальный набор свойств, которые определяют:
        // глобальные константы вроде u n d e fin ed , I n f i n i t y и NaN
        // глобальные функции наподобие isNaN (), p a r s e ln t ()
        // функции конструкторов вроде Date (), RegExp ( ) , S t r in g ( ) , O b je c t () и Array ()
        // глобальные объекты наподобие Math и JSON
    
    // в ES2020 глобальный объект определяет globalThis


// 3.8. Неизменяемые элементарные значения и изменяемые объектные ссылки
    // В JavaScript существует фундаментальное отличие между
        // элементарными значениями (undefined , null , булевские, числа и строки)
        // объектами (включая массивы и функции)
    // Элементарные значения неизменяемы такого способа не прудусмотренно
        // Пример
        let str = 'string';
        str.toUpperCase();
        console.log(str);       // => string - строка не изменилась

    // Объекты отличаются от элементарных значений - их можно модифицировать
        // Пример
        let ob = {
            x:1
        };
        ob.x = 2;
        ob.y = 7;
        console.log(ob);        // => { x: 2, y: 7 } - изменилось без перезаписи

        let ob2 = [3,4,7];
        ob2[0] = 8;
        ob2[1] = 9;
        console.log(ob2);       // => (3) [8, 9, 7] - так же изменилось
    
    // объекты не сравниваются, они не равно даже если одинаковые
    let obC = {
        x:1
    };
    console.log(ob == obC);     // => false
    console.log(ob === obC);    // => false

    // С массивами это работает так же
    let mas1 = [1,5], mas2 = [1,5];
    console.log(mas1 == mas2);  // => false
    console.log(mas1 === mas2); // => false

    // объекты сравниваются по ссылке
    // два объектных значения будут одинаковыми
    // если и только если они ссылаются на тот же самый внутренний объект
    let ma = [],
        mb = ma;
    mb[0] = 1;
    console.log('ma: ', ma);
    console.log('mb: ', mb);
    console.log(ma == mb);      // => true, так как ссылается на один и тот же массив
    // это просто присваивает ссылку а не создает копию по этому и получается true

    // Два способа копирования объектов
    // Первый способ
    let aO = ['a', 'b', 'c'];
    let bO = [];
    for (let i = 0; i< aO.length; i++) {
        bO[i] = aO[i];
    }
    // Второй способ
    let cO = Array.from(aO);
    aO[1] = 'new1';
    bO[1] = 'new1';
    cO[1] = 'new3';
    console.log(aO);        // => (3) ['a', 'new1', 'c']
    console.log(bO);        // => (3) ['a', 'new2', 'c']
    console.log(cO);        // => (3) ['a', 'new3', 'c']

    // Для сравнения двух отдельных объектов
    // нужно сравнивать свойства и элементы
    // Функция для сравнея двух массивов
    function equalArr(a, b) {
        if (a===b) return true;
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    console.log(equalArr(aO, bO));      // => true


// 3.9. Преобразования типов
    // JavaScript очень гибок в отношении типов значений
    // Мы видели это для булевских значений
    // когда интерпретатор JavaScript ожидает булевское значение
    // можете предоставить значение любого типа
    // интерпретатор JavaScript при необходимости преобразует его

    // Пример:
    console.log(10 + ' objects');       // Число стало строкой
    console.log('5' * '5');             // строки чилсами
    let n = 1-'x';                      // 'x' строка не может стать числом
    console.log(n);         // => NaN
    console.log(n + 'Object');          // NaN преобразовалось в строку

    // 3.9.1. Преобразования и равенство
        // есть две операции, которые проверяют, равны ли два значения
        // == и ===
        // ===, не считает свои операнды равными если они не относятся к одному и тому же типу

        console.log(null == undefined);         // => true: эти два значения трактуются как равные
        console.log('0' == 0);                  // => true: перед сравнением строка преобразуется в число
        console.log(0 == false);                // => true: булевское значение преобразуется в число
        console.log('0' == false);              // => true: оба операнда преобразуются в О
    
    // 3.9.2. Явные преобразования
        // функций Boolean(), Number() и String()
            console.log(Number('3'));               // строка стала числом
            console.log(String(false));             // булевское значение строкой
                console.log(false.toString());      // другой способ
            console.log(Boolean([]));               // true

        // Любое значение кроме null и undefined имеет метод toString()
            console.log((3).toString());
            console.log([1,2,3].toString());
        
        // Boolean(), Number() и String() можно также вызывать посредством new как конструкторы
        // использования подобным образом вы получите “объект-оболочку”

        // Если однимоперандом операции + является строка, тогда другой операнд преобразуется в строку
            console.log(3 + '');        // => строка
        // Унарная операция + преобразует свой операнд в число
            console.log(+'3');          // => число
        // Унарная операция ! преобразует свой операнд в булевское значение и инвертирует его
            console.log(!!3);           // => булевское значение
        
        // Метод toString() принимает необязательный аргумент где задается основание системы счисления для преобразования
        // Если вы не укажете этот аргумент, то преобразование будет делаться по основанию 10
        // преобразовывать числа в другие системы счисления (с основаниями между 2 и 36)
            let nS = 17;
            let binary = 'Ob' + nS.toString(2);
            console.log(binary);
            let octal = '0o' + nS.toString(8);
            console.log(octal);
            let hex = '0x' + nS.toString(16);
            console.log(hex);
            
        let nT = 123456.789;
        // Метод toFixed() преобразует число в строку с указанным количеством цифр после десятичной точки.
        // Он никогда не использует экспоненциальную запись.
            console.log(nT.toFixed(0));
            console.log(nT.toFixed(2));
            console.log(nT.toFixed(5));
        // Метод toExponential() преобразует число в строку, применяя экспоненциальную запись с одной
        // цифрой перед десятичной точкой и указанным количеством цифр после десятичной точки 
        // (это значит, что количество значащих цифр на единицу больше заданной вами величины).
            console.log(nT.toExponential(1));
            console.log(nT.toExponential(3));
        // Метод toPrecision() преобразует число в строку с указанным вами количеством значащих цифр.
        // Он использует экспоненциальную запись, если количество цифр недостаточно велико, чтобы полностью отобразить целую часть числа
            console.log(nT.toPrecision(3));
            console.log(nT.toPrecision(7));
            console.log(nT.toPrecision(10));
        // Обратите внимание, что все три метода в зависимости от ситуации округляют хвостовые цифры или дополняют нулями

        //Функции parseInt() и parseFloat()
            console.log(parseInt('3 blind mice'));          // => 3
            console.log(parseFloat("3.14 meters"));         // => 3.14
            console.log(parseInt('-12.34'));                // => -12
            console.log(parseInt("0xFF"));                  // => 255
            console.log(parseInt("0xff"));                  // => 255
            console.log(parseInt("-0XFF"));                 // => -255
            console.log(parseFloat(".1"));                  // => 0.1
            console.log(parseInt("0.1"));                   // => 0
            console.log(parseInt(".1"));                    // => NaN: целые числа не могут начинаться символа точки
            console.log(parseFloat("$72.47"));              // => NaN: числа не могут начинаться c символа доллара
        
        // Функция parselnt() принимает необязательный второй аргумент указывающий на систему счисления (с основаниями между 2 и 36)
            console.log(parseInt('11', 2));         // => 3
            console.log(parseInt('ff', 16));        // => 255
            console.log(parseInt('zz', 36));        // => 1295
            console.log(parseInt('077', 8));        // => 63
            console.log(parseInt('077', 10));       // => 77

    // 3.9.3. Преобразования объектов в элементарные значения
        // Одна из причин сложности преобразований объектов в элементарные значения связана с тем,
        // что некоторые типы объектов имеют несколько элементарных представлений
        // В спецификации JavaScript определены три фундаментальных алгоритма для преобразования объектов в элементарные значения
        // prefer-string
        // prefer-number
        // no-preference

        console.log({x:1, y:3} + '');
        console.log([1,2,3] + "");

        
// 3.10. Объявление и присваивание переменных
    // объявление делается с помощью ключевых слов let и const
    // Если мы присваиванием значение имени на постоянной основе, тогда такое имя будет называться константой (const), а не переменной (let)
    // До выхода ES6 переменные объявлялись посредством var

    // 3.10.1. Объявление с помощью let и const
        // Современный способ ES6
            let i3 = 3;
            let num3 = 3;
            // или
            let i31 = 3, num31 = 3;

        // Лучше присваивать начальные значения переменным при их объявление, когда этоо мозможно
            let n3 = 0;     // число
            let s3 = '';    // строка
            let a3 = [];    // массив
        
        // Если не сделать этого
            let nn3, nnn3 = '';
            console.log('nn3:  ', nn3);             // => undefined
            console.log('nnn3: ', nnn3);            // => ''
            console.log('nn3:  ', typeof nn3);      // => nn3:   undefined
            console.log('nnn3: ', typeof nnn3);     // => nnn3:  string

        // Константа (const) обязательная инициализация при объявлении
            const H0 = 74;
            const Pi = 3.14;
            console.log(H0);            // => 74
            console.log(Pi);            // => 3.14
            //console.log(H0 += 1);     // => Assignment to constant variable.
            //console.log(Pi += '1');   // => Assignment to constant variable.
            // любая попытка изменения приводит к генерации ошибки ТуреЕггог
            
            // Общепринятое правило объявлять константы со всеми прописными буквами
                const HELLO = 'hello';

    // 3.10.2. Объявление переменных с помощью var
        // до ES6 единственным способом объявления переменной было использование ключевого слова var
        // констант небыло
            var v3;
            var data3 = [1], count3 = data3.length;
            for (var i = 0; i < count3; i++) console.log(data3[i]); 
        
        // var видно везде область видимости отличается от let
        
        // глобальная переменная var
        globalThis.x33 = 4;     // для создания глобальной переменной ссылаемся на globalThis
        console.log(x33);       // => 4
        
        let x34 = 5;
        //delete x34;
        //delete x33;                   
        //console.log(x33);            // => x33 is not defined    удалилось
        //console.log(x34);            // => 5                     не удалилось так как не являются свойствами глобальног объекта
        //console.log(globalThis);     // глобальная область

    // 3.10.3. Деструктурирующее присваивание
        // Пример
            let [x310, y310, z310] = [7, 9, 18];
            console.log(x310);      // => 7
            console.log(y310);      // => 9
            console.log(z310);      // => 18
        
        // Пример в работе с функциями умножаем каждое число в массиве на два
            function duble (x, y) {
                return [x*2, y*2];
            };
            let [cD, vD] = duble(7,8);
            console.log(cD);        // => 14
            console.log(vD);        // => 16

        // Функция число в квадрат и в куб
            const destrSum = document.querySelector('.destr-sum'),
                destrBut = document.querySelector('.destructuring-but'),
                destrTotal = document.querySelector('.destrTotal');
            
            destrBut.addEventListener('click', () => {
                if (destrSum.value.length >= 1 && Boolean(+destrSum.value)) {
                    let [squ, cub] = markup(+destrSum.value);
                    destrTotal.innerHTML = `Квадрат = ${squ}, куб = ${cub}`;
                } else {
                    destrTotal.innerHTML = `Вы ввели число с ошибкой`;
                }
            })

            function markup (x) {
                return [x**2, x**3]
            }
        
        // Деструктуризация и for
            let obJ = {
                x:1,
                y:2,
                z:3,
                f:4
            };
            for (const [name, value] of Object.entries(obJ)) {
                console.log(name, value);
            }

        // Добавить остаток в одно значение
            let [xyz, ...zyx] = [1,2,3,4,5,6,7,8];
            console.log(xyz);       // => 1
            console.log(zyx);       // => [2, 3, 4, 5, 6, 7, 8]

        // Деструктурирующее присваивание можно применять с вложенными массивами но левая часть должна быть похожа
            let [xc, [xv,xz], xb] = [1, [5,6], 3];
            console.log(xc);
            console.log(xv);
            console.log(xz);
            console.log(xb);

        let [...arrStr] = 'Привет друг';
        console.log(arrStr);        // => ['П', 'р', 'и', 'в', 'е', 'т', ' ', 'д', 'р', 'у', 'г']

        // Деструктурирующее присваивание c объектом
            let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0 };
            let {r,g,b,a} = transparent;
            console.log(r);
            console.log(a);
        
// Конец 3 главы