/* 1.1. Исследование JavaScript */
{
    let x = 2, y = 4;
    console.log(x+y);
}

/* 1.2. Программа "Hello World" */
{
    console.log('Hello World!');
}

/* 1.3. Тур по JavaScript */
{
    // Все, что следует за двумя символами косой черты, является комментарием.
    // Переменные объявляются с помощью ключевого слова let:
    let x;                                      //Объявление переменной по имени х.
    console.log('x ', x);
    // Присваивать значения переменным можно посредством знака =.
    x = 7;                                      // Теперь переменная х имеет значение 7.
    console.log('x ', x);

    // JavaScript поддерживает несколько типов значений.
    x = 1;                      // Числа
    x = 0.01;                   // числа могут быть целыми и вещественными
    x = 'hello';                // строка текстати в ковычках
    x = "JavaScript";           // строка текстати в ковычках
    x = true;                   // Булевское значение.
    x = false;                  // Другое булевское значение
    x = null;                   // null - это означает отсутсвие значения
    x = undefined;              // undefined - подобно null

    // Самым важным типом данных JavaScript является объект.
    // Объект - это коллекция пар имя/значение
    // или отображений строки на значение.
    let book = {
        topic: "JavaScript",
        edition: 7,
        ch: 1    
    };
    // Доступ к свойствам объекта осуществляется с помощью . или [] :
    console.log(book.topic);
    //console.log(book[edition]);
    book.author = 'Flanagan';           // Новые свойства создаются посредством присваивания
    book.contents = {};                 // {} - пустой объект, не имеющий свойств
    console.log('book: ', book);

    // Условный доступ к свойствам с помощью ?. (ES2020) :
    console.log(book.contents?.ch01?.sect);         // => не определено: book.contents не имеет свойства chOl

    // JavaScript также поддерживает массивы (списки с числовой индексацией) значений:
    let primes = [2,5,7,9]                      // Массив из 4 значений, ограниченный посредством [ и ] .
    console.log(primes[0]);                     // => 2: первый элемент (с индексом 0) массива
    console.log(primes.length);                 // количество элементов в массиве
    console.log(primes[primes.length-1]);       // => послдений элемент массива
    primes[4] = 58;                             // С помощью присваивания можно добавлять новые элементы. Но таким способом в определенное место
    primes.push(44);                            // Тоже присваивание но на следующие место после последнего
    console.log(primes);
    primes[4] = 58;                             // С помощью присваивания можно изменять существующие элементы.

    let empty = [];                             // [] - пустой массив, не имеющий элементов.
    console.log(empty.length);

    // Массивы и объекты могут содержать другие массивы и объекты:
    let points = [
        {x:0, y:0},
        {x:1, y:1}
    ];
    let data = {
        trial1:[[1,2], [3,4]],
        trial2:[[2,3], [4,5]]
    };


    // Один из наиболее распространенных способов формирования выражений в JavaScript предусматривает применение операций:
    // Операции осуществляют действие над значениями (операндами),
    // чтобы произвести новое значение.
    // Арифметические операции относятся к наиболее простым:
    3+2     // сложение
    3-2     // вычитание
    3*2     // умножение
    3/2     // деление
    points[1].x + points[1].y     // более сложные операнды тоже работают
    '3'+'2'     //сложение или склеивание строк /конкатенация строк

    // В JavaScript определен ряд сокращенных арифметических операций:
    let count = 0;          // Определение переменной
    count++;                // Инкрементирование переменной
    count--;                // Декрементирование переменной
    count += 2;             // Прибавление 2: то же, что и count = count + 2;
    count *= 3;             // Умножение на 3: то же, что и count = count * 3;
    count;                  // => 6: имена переменных - тоже выражения.

    // Операции сравнения проверяют, равны или не равны два значения,
    // больше или меньше одно из них и т.д. Результатом будет true или false:
    let xx = 4, yy = 7;
    console.log("xx === yy:                     ",  xx === yy);
    console.log("xx !== yy:                     ", xx !== yy);
    console.log("xx < yy:                       ", xx < yy);
    console.log("xx > yy:                       ", xx > yy);
    console.log("xx <= yy:                      ", xx <= yy);
    console.log("xx >= yy:                      ", xx >= yy);
    console.log(`"two" === "three":             `, "two" === "three");
    console.log(`"two" > "three":               `, "two" > "three");
    console.log("false === (xx > yy):           ", false === (xx > yy));

    // Логические операции объединяют или инвертируют булевские значения: (стр 30)
    console.log("(xx === 4) && (yy === 7):      ", (xx === 4) && (yy === 7));                // => true: оба сравнения дают true. && обозначает И

    console.log("(xx > 5) || (yy < 5):          ", (xx > 5) || (yy < 5));                    // => false: ни одно из сравнений не дает true. || обозначает ИЛИ

    console.log("!(xx === yy):                  ", !(xx === yy));                            // // => true: ! инвертирует булевское значение

    // Функции - это параметризованные блоки кода JavaScript,
    // которые мы можем вызывать.
    function plus1(x) {          // Определить функцию по имени plus1 с параметром х.
        return x + 10;           // Возвратить значение на 10 больше переданного значения
    };                           // Функции заключаются в фигурные скобки
    console.log("plus1(yy):                     ", plus1(yy));     // => 17: у равно 7, так что этот вызов возвращает 7 + 10

    let square = function(x) {
        return x*x;
    };
    console.log("square(plus1(xx)):             ", square(plus1(xx)));     // => 196: вызвать две функции в одном выражении. xx=14

    // стрелочные функции (arrow function)
    const plus2 = x => x + 1;
    const square2 = x => x*2;
    console.log('plus2(yy):                     ', plus2(yy));
    console.log('square2(plus2(yy)):            ', square2(plus2(yy)));    

    // Когда мы применяем функции с объектами, то получаем методы:
    // Когда функции присваиваются свойствам объекта,
    // мы называем их "методами".
    // Методы имеют все объекты JavaScript (включая массивы) :
    let ob = [];                        // Создать пустой массив.
    console.log("Создали пустой массив:         ", ob); 
    ob.push(1,2,3);                     // Метод push () добавляет элементы в массив.
    console.log("Запушили элементы:             ", ob); 
    ob.reverse();                       // Еще один метод: изменение порядка следования элементов на противоположный.
    console.log("Изменили порядок элементов:    ", ob); 

    // Мы также можем определять наш собственный метод.
    // Ключевое слово this ссылается на объект, в котором определяется
    // метод: в данном случае на определенный ранее массив points,
    points.dist = function() {              // Определить метод для расчета расстояния между точками.
        let p1 = this[0];                   // Первый элемент массива, на котором вызван метод
        let p2 = this[1];                   // Второй элемент объекта this
        let a = p2.x-p1.x;                  // Разность координат х.
        let b = p2.y-p1.y;                  // Разность координат у.
        return Math.sqrt(a*a + b*b);        // Теорема Пифагора Math.sqrt() вычисляет квадратный корень
    }
    console.log("points.dist():                 ", points.dist());

    // А теперь, как и было обещано, рассмотрим несколько функций, в телах которых
    // демонстрируются распространенные операторы JavaScript, относящиеся к
    // управляющим структурам:

    // JavaScript включает условные операторы и циклы, использующие
    // синтаксис С, C++, Java и других языков.

    function abs(x) {
        if (x >= 0) {
            return x;
        } else {
            return -x;
        }
    }
    console.log("abs(-10):                      ", abs(-10));
    console.log("abs(-10) === abs(10):          ", abs(-10) === abs(10));

    function sum(array) {                   // функция расчета сумму элементов массива
        let sum = 0;
        for (let x of array) {
            sum += x;
        }
        return sum;
    }
    console.log("sum(primes):                   ", sum(primes));

    function factorial(n) {
        let product = 1;
        while (n > 1) {
            product *= n;
            n--;
        }
        return product;
    }
    console.log("factorial(4):                  ", factorial(4));
    
    function factorial2(n) {
        let i, product = 1;
        for (i=2; i <= n; i++) {
            product *= i;
        }
        return product;
    }
    console.log("factorial2(5):                 ", factorial2(5));


    // Язык JavaScript поддерживает стиль объектно-ориентированного программирования
    // но он значительно отличается

    class Point {                                       // По соглашению имена классов начинаются с заглавной буквы
        constructor(x ,y) {                             // Функция конструктора для инициализации новых экземпляров
            this.x = x;                                 // Ключевое слово this - это новый инициализируемый объект
            this.y = y;
        }                                               // Оператор return в функции конструктора не нужен
        distance() {                                    // Метод для расчета расстояния от начала координат до точки
            return Math.sqrt(                           // Возвратить квадратный корень xl + yl.
                this.x * this.x + this.y * this.y       // this ссылается на объект Point // на котором вызван метод distance.
            );
        }
    }
    // Использовать функцию конструктора Point () вместе с new для создания объектов Point 
    let p = new Point(1, 1);                            // Геометрическая точка (1,1) .
    console.log("p.distance():                  ", p.distance());

    // На этом вводный тур по фундаментальному синтаксису и возможностям
    // JavaScript закончен, но далее в книге предлагаются самодостаточные главы, в
    // которых раскрываются дополнительные средства языка.
}


console.log('');console.log('');
//1.4. Пример: гистограмма частоты использования символов
console.log('1.4. Пример: гистограмма частоты использования символов');
{
    
}