const main = document.querySelector('.main');

function addContent (name, text) {
    main.innerHTML += `
        <div class="content">
            <div class="contentText">
                <span class="nameContent">${name}</span>
                <span class="textContent">${text}</span>
            </div>
        </div>
    `
}

// 4.1. Первичные выражения
    // Первичными выражениями в JavaScript являются константы или литеральные значения, 
    // определенные ключевые слова языка и ссылки на переменные
    
    // Литералы — это постоянные значения, встроенные напрямую в программу
        1.23            // числоловой литерал
        'string'        // строковый  литерал
        // /шаблон/     // регулярный литерал

    // Зарезервированные первичными выражениями
        true        // Вычисляется как булевское истинное значение
        false       // Вычисляется как булевское ложное значение
        null        // Вычисляется как нулевое значение
        this        // Вычисляется как "текущий” объект
    
    // третий тип первичных выражений представляет собой ссылку на
    // переменную, константу или свойство глобального объекта:
        // i                // Вычисляется как значение переменной i
        // sum              // Вычисляется как значение переменной sum
        // undefined        // Вычисляется как "неопределенное" свойство глобального объекта

    // ReferenceError - переменной не существует


// 4.2. Инициализаторы объектов и массивов
    // Инициализаторы объектов и массивов — это выражения, значениями которых
    // будут вновь созданные объекты или массивы

    // Инициализатор массива представляет собой разделяемый запятыми список сражений, содержащийся в квадратных скобках
        let array1 = [];                // Пустой массив 
        let array2 = [1+3, 4+3];        // Двухэлементный массив 4 7
        addContent('Инициализация массива', 'let array = [1,2,3];');

    // выражения элементов в инициализаторе мас
    // сами могут быть инициализаторами мас
    // Вложенный массив
        let array3 = [[1],[2,3],[4,5,6]];

    // В литерал массива можно включать неопределенные элементы
        let array4 = [1,,,,5];      // => [1, пусто × 3, 5]
        addContent('Неопределенные элементы в массиве', 'let array = [1,,,,5];');

    // В инициализаторе массива разрешена хвостовая запятая, неопеделенного массива не будет
        let array5 = [1,2,3,];      // => [1, 2, 3]
    
    // Инициализатор объектов похоже на массивы
    // квадратные скобки [] меняются на фигурные {}
    // каждое подвыражение снабжается префиксом с именем свойства и двоеточием
        let object1 = {};
        let object2 = {x:1, y:2, z:3};
        addContent('Инициализация объекта', 'let object = {x:1, y:2, z:3};');

    // Вложенные объектные литералы
        let object3 = {
            obj1: {x: 1, y: 2},
            obj2: {x: 3, y: 4}
        };

// 4.3. Выражения определений функций
    let square = function (x) { return x * x };         // квадрат  числа
    addContent('Выражения определений функций', 'let square = function (x) { return x * x };');
    
// 4.4. Выражения доступа к свойствам
    // Есть два вида синтаксиса для доступа к свойствам 
    // выражение . идентификатор
    // выражение [ выражение ]

    let object4 = {x:1, y: {z:2, c: 3}, 'xy xy': 'пробел'};
    let array6 = [object4 , 1,[2,3]];

    console.log(object4.x);
    console.log(object4.y.z);
    console.log(object4['x']);
    console.log(object4['xy xy']);
    
    console.log(array6[1]);
    console.log(array6[2]['1']);
    console.log(array6[0].y);

    addContent('Выражения доступа к свойствам', 'array6[2][\'1\'];');

    // 4.4.1. Условный доступ к свойствам
        // В ES2020 появились два новых вида выражений доступа к свойствам:
        // выражение ?. идентификатор
        // выражение ?. [ выражение ]

        let a = {b:{c: 5}};

        console.log(a.b);
        console.log(a?.b);
        console.log(a.b.c.d);           // Если без условного доступа то это конец
        console.log(a.b.c?.d?.a);       // Если использовать ?. тогда можно проверять на сколько хочешь глубоко ошибки не будет только undefined


// 4.5. Выражения вызова
    // Выражение вызова — это синтаксис JavaScript для вызова (либо выполнения) функции или метода
    function f1 (e) {return (e)};
    console.log(f1(0));                  //  f1 - выражение функции; 0 - выражение аргумента
    console.log(Math.max(1,2,3));        //  Math.max - - выражение функции; 1,2,3 - выражение аргумента
    console.log([3,1,2].sort());         //  sort() - выражение функции; [3,1,2] - выражение аргумента

    // 4.5.1. Условный вызов
        // В ES2020 функцию можно вызывать также с применением ?. () вместо ()
    
    addContent('Выражения вызова', 'синтаксис JavaScript для вызова (либо выполнения) функции или метода. Пример : f1(0)');


// 4.6. Выражения создания объектов
    // Выражение создания объекта создает новый объект и вызывает функцию
    // (называемую конструктором) для инициализации свойств этого объекта.
        new Object();
        new Object(2,3);

    // Если аргумента нет то скобки можно опустить
        new Object;

// 4.7. Обзор операций
    // Операции используются в JavaScript для арифметических выражений и т.д.
    
    // 4.7.1. Количество операндов
        // бинарными операциями
            // Большинство операций JavaScript они ожидают два операнда
            // 2 + 2
        // унарных операций
            // превращают одиночное выражение в одиночное более сложное выражение
            // - в выражении -х

    // 4.7.2. Типы операндов и результата
        // Некоторые операции работают со значениями любого типа
        
        // Операции JavaScript обычно по мере надобности преобразуют типы
        // Операция умножения * ожидает числовые операнды
            // "3" * "5" вернет число 15 преобразовав их в числа

    // 4.7.3. Побочные эффекты операций
    
    // 4 7.4. Приоритеты операций
        // у всех операций есть приоретер по выполнению, сначала выполняется та у которой больше приоритет

        // Рассмотрим следующее выражение:
            // w = X + y*z;
            // умножения * имеет более высокий приоритет
            // чем операция сложения + 
            // поэтому умножение выполняется раньше сложения

        // Операция присваивания = имеет самый низкий приоритет

        // Приоритеты операций можно переопределять а счет явного использования круглых скобок
            // w = (х + у) *z;
        
        let g = null
        console.log(g ?? 4);

        // Когда в JavaScript добавляются новые операции, они не всегда естественным
        // образом вписываются в эту схему приоритетов
            // Операция ?? имеющая более низкий приоритет
            // чем | | и && по на самом деле ее приоритет относительно упомянутых 
            // операций не определен, и стандарт ES2020 требует явного использования
            // круглых скобок при смешивании ?? с | | или &&

            // Аналогично новая операция возведения в степень **
            // Пе обладает четко определенным приоритетом относительно унарной операции

    // 4.7.5. Ассоциативность операций
        // У каждой операции есть её ассоциативность
        // которая определяет порядок выполнения операций с одинаковыми приоритетами
        
        // Например, операция вычитания имеет ассоциативность слева направо
            // w = x - у - z
        // то же самое, что и
            // W = ( (х - у) - z)

        // Но операция возведения в степень, унарная операция, операция присваивания
        // и тернарная условная операция имеют ассоциативность справа налево

    // 4.7.6. Порядок вычисления
        // Например, в выражении w = х + у * z
        // подвыражение w вычисляется первым, а за ним х, у и z
        // Далее значения у и z перемножаются
        // произведение складывается со значением х
        // результат присваивается переменной или свойству, указанному выражением w

        // Добавление круглых скобок к выражениям может изменить относительный 
        // порядок выполнения умножения сложения и присваивания
        // НО но не порядок вычисления слева направо


// 4.8. Арифметические выражения
    // Большинство арифметических операций можно применять с операндами BigInt

    //Базовыми арифметическими операциями являются
        // ** (возведение в степень)
            2 ** 3      // => 8
        // * (умножение)
            2 * 2       // => 4
        // / (деление)
            2 / 2       // => 1
        // % (модуль: остаток от деления)
            2 % 2       // => 0
        // + (сложение) и - (вычитание)
            2 + 2 - 2   // => 0
        
    // Math.pow () тоже самое что и операция **

    // Операция / делит свой первый операнд на второй

    // Операция % делит по модулю первый операнд на второй
        // так же работает с плавающей точкой 6.5 % 2 .1 равен 0.2.

    // 4.8.1. Операция +
        //Бинарная операция + выполняет сложение числовых операндов или конкатенацию строковых операндов:
            1 + 2                   // => 3 сложение
            'Привет' + ' друг'      // => 'Привет друг' конкатенация
            '1' + '2'               // => '12' конкатенация
    
        // Правила преобразования для операции + отдают предпочтение конкатенации строк
        // если один из операндов оказывается строкой или объектом, преобразуемым в строку,
        // то другой операнд преобразуется в строку и выполняется конкатенация.
        
        // Сложение выполняется лишь тогда, когда ни один из операндов не подобен строке

            1 + '2'         // => '12' конкатенация после преобразования числа в строку
            '1' + 2         // => '12' конкатенация после преобразования числа в строку
            1 + 2           // => 3 Сложение
            true + 1        // => 2 Сложение, преобразовало булевское значение в число
            true + true     // => 2 Сложение, преобразовало булевское значение в число
            4 + false       // => 4 Сложение, преобразовало булевское значение в число
            3 + null        // => 3 Сложение, преобразования null в О

        // ассоциативность в строках
            // результат зависит от порядка выполнения
            1 + 2 + ' друга'        // => '3 друга'
            1 + (2 + ' друга')      // => '12 друга'

        addContent('Конкатенация строк', 'Склеивание двух строк в одну. Пример: \'Привет\' + \'Друг\' => \'ПриветДруг\';');
    
    // 4.8.2. Унарные арифметические операции
        // Унарные арифметические операции, (+, -, ++ и —), при необходимости преобразуют свой единственный операнд в число
            // Унарный плюс (+) - преобразует свой операнд в число (или в NaN) и возвращает преобразованное значение
                +'11'               // => 11
                +true               // => 1
                1 + +'3'            // => 4
                +'пока'             // => NaN
                1 + +'привет'       // => NaN
                
                // Унарный плюсс нельзя применять со значениями BigInt, не могут быть преобразованы в обыкновенные числа

            // Унарный минус (-) - преобразуется в число и знак результата изменяется
                -'11'               // => -11
                -true               // => -1
                1 - -'3'            // => 4
                -'пока'             // => NaN
                1 - -'привет'       // => NaN

            // Инкремент (++) - инкрементирует свой единственный операнд (т.е. добавляет к нему 1)
                // значение операции ++ зависит от ее позиции относительно операнда
                    // Когда операция ++ находится перед операндом, она называется ПРЕФИКСНЫМ инкрементом
                    // Когда операция ++ находится после операнда, она называется ПОСТФИКСНЫМ инкрементом

                    let i = 1, j = ++i;     // => 2 оба
                    let n = 1, m = n++;     // => n 2  m 1

            // Декремент (—)
                // вычитает из операнда 1
    // 4.8.3. Побитовые операции
        // Побитовые операции выполняют низкоуровневые манипуляции битами в двоичном представлении чисел
        // Такие операции обычно не применяются в программировании на JavaScript

// 4.9. Выражения отношений
    // 4.9.1. Операции равенства и неравенства
        // Операция == допускает преобразования типов
        // Операция === не допускает преобразования типов

        // Операции ! = и ! == проверяют прямую противоположность операциям == и ===

        // Операции =, == и ===
            // присваивания, равенства и строгого равенства

        // РЕКОМЕНДАЦИЯ
            // Вы должны почти всегда использовать === вместо == и !== вместо !=. Во избежания ошибок
        
        // Строгое равенство
            // Если два значения относятся к разным типам, тогда они не равны
                console.log('1 === "1":                 ', 1 === '1');                      // => false
            // Если оба значения являются n u l l или u n d e fin ed , тогда они равны
                console.log('null === null:             ', null === null);                  // => true
                console.log('undefined === undefined:   ', undefined === undefined);        // => true
            // Если оба значения представляют собой булевское значение true или false , тогда они равны.
                console.log('true === true:             ', true === true);                  // => true
                console.log('false === false:           ', false === false);                // => true
            // NaN никогда не равно никакому другому значению включая себя самого 
                console.log('NaN === NaN:               ', NaN === NaN);                    // => false
                console.log('NaN !== NaN:               ', NaN !== NaN);                    // => true, так не проверить, так как не равно само себе всегда
                console.log('NaN !== 1:                 ', NaN !== 1);                      // => true
                // для проверки можно использовать
                    console.log('isNaN(NaN):                ', isNaN(NaN));                 // => true
                    console.log('isNaN(1):                  ', isNaN(1));                   // => false
            // Если оба значения являются числами с одной и той же величиной, тогда они равны. Так же 0 и -0 раны
                console.log(1 === 1);
                console.log(0 === -0);
                console.log(1 === -1);
            // Строки
                // содержат в точности те же самые 16-битные величины в тех же позициях, тогда они равны.
                    console.log('Привет' === 'Привет');
                // Если строки отличаются длиной или содержимым, то они не равны.
                    console.log('Привет' === 'привет');
                    console.log('Привет' === 'приветДруг');
                // Две строки могут быть закодированными с использованием разных последовательностей 16-битных значений
                    // такие строки не раны
            // ссылки
                // оба значения ссылаются на тот же самый объект, массив или функцию, тогда они равны
                    let array7 = [1,2,3], array8 = [1,2,3], array71 = array7, array72 = array7, array81 = array8;
                    console.log(array71 === array72);
                // Если два значения ссылаются на разные объекты, они не равны, даже если оба объекта имеют идентичные свойства
                    console.log(array71 === array81);

        // Равенство с преобразованием типов (==)
            // Если значения двух операндов не относятся к одному и тому же типу, 
            // тогда она опробует некоторые преобразования типов и пытается выполнить сравнение снова
                // Если два значения имеют один и тот же тип, то они проверяются на предмет
                // строгого равенства, как было описано выше. Если значения строго
                // равны, тогда они равны и нестрого. Если значения не равны строго, то
                // они не равны и нестрого.

                // Если два значения не относятся к одному и тому же типу, тогда операция
                // == все еще может счесть их равными. Она применяет преобразование типов
                    console.log(1 == '1');
                // Если одним значением является n u ll, а другим — undefined, то они равны
                    console.log(null == undefined);
                // Если одно значение представляет собой число, а другое — строку, тогда
                // строка преобразуется в число. Пример в строке 341
                
                // Есил в сравнение есть беловое значение true false то они преобразовываются в 1 и 0 и сравниватюся
                    console.log(true == 1);
                    console.log(false == 0);
                // Если одним значением оказывается объект, а другим — число или строка
                // тогда преобразуется в элементарное значение
                    // метода t o S t r in g ()
                        console.log({x:1, y:2}.toString());
                    // метода v a lu eO f ()
                        console.log({x:1, y:2}.valueOf());

    // 4.9.2. Операции сравнения
        // Операции сравнения проверяют относительный порядок (числовой или алфавитный)
        // двух своих операндов.
        // Читаются слева на право

        // Меньше (<)
            console.log(5 < 6);
        // Больше (>)
            console.log(9 > 6);
        // Меньше или равно (<=)
            console.log(5 <= 5);
        // Больше или равно (>=)
            console.log(9 >= 9);
        
        // сравнение и преобразование
            // двух операндов оказывается объектом, то он преобразуется в элементарное значение, toString() valueOf()

            // Если после требуемых преобразований, становятся строками 
            // тогда две строки сравниваются в алфавитном порядке

            // либо сравниваются числами

            // Более нежедный алгоритм сравнения строк String.localeCompare()
            // Для сравнения, нечувствительного к регистру, вы можете преобразовывать все символы в строках к
            // нижнему или верхнему регистру с применением метода String.toLowerCase()
            // или String.toUpperCase() или более универсальный Inti.Collator


    // 4.9.3. Операция in
        // Операция in ожидает с левой стороны операнд, который является строкой,
        // символом или значением, допускающим преобразование в строку
        // а с правой объект
        // вернет true если с левой стороны будет имя свойста обхекта с правой
            let object5 = {x: 7, y: 9, 4: 5};
            console.log("'x' in object5:            ", 'x' in object5);             // => true объект имеет свойство по имени "х"
            console.log("'z' in object5:            ", 'z' in object5);             // => false объект не имеет свойства по имени "z"
            console.log("4 in object5:              ", 4 in object5);               // => true число в строку объект имеет свойство по имени "4"
            console.log("'toString' in object5:     ", 'toString' in object5);      // => true объект наследует метод toString

            let array9 = [7,8,9];
            console.log("'0' in array9:             ", '0' in array9);              // => true массив имеет элемент "О"
            console.log("1 in array9:               ", 1 in array9);                // => true число в строку массив имеет элемент "1"
            console.log("9 in array9:               ", 9 in array9);                // => false массив не имеет элемента 9

    // 4.9.4. Операция instanceof
        // Операция in s ta n c e o f ожидает с левой стороны операнд, который является
        // объектом, а с правой стороны операнд, идентифицирующий класс объектов
            let ddq = new Date;                                                     // Создание нового объекта с помощью конструктора Dated
            console.log("ddq instanceof Date:       ", ddq instanceof Date);            // => true объект ddq был создан с помощью Dated
            console.log("ddq instanceof Object:     ", ddq instanceof Object);          // => true все объекты являются экземплярами Object
            console.log("ddq instanceof Number:     ", ddq instanceof Number);          // => false d - не объект Number

            let aaq = [1, 2, 3];                                                    // => Создание нового массива
            console.log("aaq instanceof Array:      ", aaq instanceof Array);         // => true объект а - массив
            console.log("aaq instanceof Object:     ", aaq instanceof Object);        // => true все массивы являются объектами
            console.log("aaq instanceof RegExp:     ", aaq instanceof RegExp);        // => false массивы - не регулярные выражения
        
        // ВНИМАНИЕ, все объекты являются экземплярами Object.

// 4.10. Логические выражения
    // Логические операции &&, || и !
    
    // 4.10.1. Логическое И (&&)
        // Операцию && можно осмысливать на трех разных уровнях
            // 1 уровень
                // На простейшем уровне, когда операция && используется с булевскими операндами,
                // она выполняет булевскую операцию И над двумя значениями
                
                // Операция && часто применяется в качестве конъюнкции
                    console.log("Логическое И: ", 0 === 0 && true === true);          // => true
                
                // Выражения отношений всегда вычисляются как true или false

            // 2 уровень
                // && — она представляет собой булевскую операцию И для истинных и ложных значений
                // если оба true => true, если какой-то из них false => false

            // 3 уровень
                // Операция && начинается с вычисления своего первого операнда, т.е. выражения с левой стороны
                // Если первое значение слева будет false => false даже не вычисляя выражение справа

            // Так же если первое левое значение true тогда общее значение зависит от выражения справа 
            // если оно true тогда => true если false => false 

            // операция && останавливается на первом false и взвращает false
            let oi = {x:1};
            let pi = null;
            console.log(oi && oi.x);        // => 1 оi является истинным, так что возвратить значение оi.х
            console.log(pi && pi.x);        // => null рi является ложным, так что возвратить его и не вычислять рi.х

            // Поведение операции && иногда называют коротким замыканием инногда можно увидеть такой код
            // следующие две строки кода JavaScript дают эквивалентный эффект
                if (true == 1) console.log('stop 1');   // => stop 1
                (true == 1) && console.log('stop 2');   // => stop 2 то же самое как и выше
    
    // 4.10.2. Логическое ИЛИ (||)
        // Операция | | выполняет булевскую операцию ИЛИ над своими двумя операндами
        // Если один или оба операнда true => true

        // если первый операнд true она замыкает и возращает true даже без вычисления второго операнда
            console.log(1 || 2);    // => 1
        // так же если первый операнд false то операция вычисляет значение второго операнда
            console.log(0 || 2);    // => 2
        
        // Пример
            // let max = maxWidth || preferences .maxWidth || 500;
            // Если значение maxWidth истинное, то использовать его
            // Иначе искать значение в объекте
            // preferences. Если оно не истинное, тогда использовать
            // жестко закодированную константу
        
    // 4.10.3. Логическое НЕ (!)
        // Операция ! является унарной и помещается перед одиночным операндом
        // Ее цель — инвертирование булевского значения операнда
            // если x - true то !x - false и на оборот
        
        // В отличие от && и || операция ! преобразует свой операнд в булевское значение

        // Если вы хотите инвертировать значение выражения наподобие р && q то нужно делать в скобказ !(р && q)

        // два закона булевой алгебры, которые мы можем выразить посредством синтаксиса JavaScript
            // Законы де Моргана
                // ! (р && q) === (!р | | !q) // => true: для всех значений р и q
                // ! (р II q) === (!р && !q) // => true: для всех значений р и q