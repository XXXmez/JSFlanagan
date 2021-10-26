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
        console.log(3/0);
        console.log(-3/0);
        // Исключение: ноль, деленный на ноль, не имеет четко определенного значения
        console.log(0/0);
        // Так же будет (not-a-number) с не нечисловыми операндами которые не могут быть преобразованы в числа
        console.log(Infinity/Infinity);

        // Свойства Number определяются в ES6
        console.log(Number.parseInt('4'));
        console.log(Number.parseFloat('5'));
        console.log(Number.isNaN(0/0));
        console.log(Number.isFinite(5));
        console.log(Number.isInteger(5.1));
        console.log(Number.isSafeInteger(5));
        console.log(Number.MIN_SAFE_INTEGER);
        console.log(Number.MAX_SAFE_INTEGER);
        