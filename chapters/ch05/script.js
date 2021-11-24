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
class AddItemContent {
    constructor(title, text, ...rest) {
        this.title = title;
        this.text = text;
        this.outer = rest;
    }
    
    render() {
        main.innerHTML += `
            <div class="content">
                <div class="contentText">
                    <span class="nameContent">${this.title}</span>
                    <span class="textContent">${this.text}</span>
                </div>
            </div>
        `
        console.log(this.title, this.text, this.outer);
    }
}

//new AddItemContent('Первый', 'второй', 'третий', 'четвертый', 'пятый').render();

// 5. Операторы
    // Условные операторы
        // if и switch вынуждают интерпретатор JavaScript выполнять 
        // или пропускать операторы в зависимости от значения выражения.
        addContent('Условные операторы', 'if и switch');
    // Операторы циклов
        // while и for, которые обеспечивают многократное
        // выполнение других операторов
        addContent('Операторы циклов', 'while и for');
    // Операторы переходов
        // break, return и throw, которые заставляют интерпретатор
        // переходить к другой части программы
        addContent('Операторы переходов', 'break, return и throw');


    // 5.1. Операторы-выражения
        // Одной из основных категорий операторов-выражений считаются операторы присваивания
            // greeting = "Hello " + name;
            // i *= 3;

        // Операции инкремента и декремента, ++ и —, относятся к операторам-выражениям
            // counter++;

        // операции d e l e t e связан с удалением свойства объекта
            // delete о.х;

        // Вызовы функций — еще одна основная категория операторов-выражений
            // console.log(debugMessage);
            // displaySpinner ();

    
    // 5.2. Составные и пустые операторы
        // Операторный блок — это просто последовательность операторов, помещенная внутрь фигурных скобок.
            {
                let x = Math.PI;
                let cx = Math.cos(x);
            }


    // 5.3. Условные операторы
        // Такие операторы представляют собой “ветвления”

        //  5.3.1. if
            // Оператор if имеет две формы  
                // Первая
                    if (true) console.log(true);
                    if (1===1) {console.log(1);}
                // Вторая
                    if (1) {
                        console.log(1);
                    } else {
                        console.log(0);
                    }
            // if можно использовать как с {} так и без них, они нужны для лучшего понимания а else принадлежит ближайшему if
                    if (0)
                        console.log(1);
                    else
                        console.log(0);

        // 5.3.2. else if
            // Является часто используемой программной идиомой которая возникает при
            // многократном применении операторов if/else

            if (1) {
                console.log(1);
            } else if (2) {
                console.log(2);
            } else if (3) {
                console.log();
            } else {
                console.log(0);
            }
            // неудобный аналог
            if (1) {
                console.log(1);
            } else {
                if (2) {
                    console.log(2);
                } else {
                    if (3) {
                        console.log(3);
                    } else {
                        console.log(0);
                    }
                }
            }
        
        // 5.3.3. switch
            // switch (выражение) {
            //     операторы
            // }

            switch (1) {
                case 1:
                    console.log(1);
                    break;
                case 2:
                    console.log(2);
                    break;
                case 3: 
                    console.log(3);
                    break;
                default:
                    console.log(0);
                    break;
            }


    // 5.4. Циклы
        // имеется пять операторов цикла: while, do/while,
        // for, for/of (и его разновидность for/await) и for/in.

        // 5.4.1. while
            // while представляет базовый цикл JavaScript
                //w h ile (выражение)
                    //оператор

            let count1 = 0;
            while (count1 < 5) {
                console.log(count1);
                count1++;
            }

        // 5.4.2. do/while
            // похож на while выражение цикла проверяется в конце цикла, а не в начале
                let count2 = 0;
                do {
                    console.log(count2);
                } while (count2++ < 5)

        // 5.4.3. for 
            // for (инициализация; проверка; инкрементирование)
            // оператор

            // эквивалентный for цикл while 
                // инициализация;
                // while(проверка) {
                //  оператор
                //  инкрементирование;
                // }

            for(let count = 0; count < 5; count++) {        // аналог цикла while со 152 строки
                console.log(count);
            }

            let i, j, sum = 0;
            for (i = 0, j = 10 ; i < 10 ; i++, j-- ) {
                sum += i * j;
            }

            // for используется для обхода структуры данных типа связного списка и возвращения последнего объекта в списке
            function tail(о) { // Возвращает хвост связного списка о
                for(; о.next; о = о.next) /* пустое тело */ ; // Обход, пока свойство о.next истинное
                return о;
            }
            console.log(tail(5));

        // 5.4.4. for/of
            // представляет собой совершенно другой вид цикла в
            // сравнении с обыкновенным циклом for

            // работает с итерируемыми объектами
            // массивы, строки, множества и отображения являются итерируемыми

            // сумма всех чисел массива с использованием for/of
                let arrNumbers = [1,5,4,6,7,3,7,8,2], 
                    sum2 = 0;
                for (let number of arrNumbers) {
                    sum2 += number;
                }
                console.log(sum2);

            // Итерация по массивам производится “вживую” — изменения, внесенные во
            // время итерации, могут влиять на ее исход
            
            // for/of с объектами
                // Объекты (по умолчанию) не являются итерируемыми.
                // let o = { х: 1, у: 2, z: 3 };
                // for (let element of o) { // Генерируется ТуреЕггог, потому что o не итерируемый объект
                //     console.log(element);
                // }
            
            // для объекта использовать for/in
            // или for/of с методом Object.keys ():
                let o = { х: 1, у: 2, z: 3 };
                let keys = '';
                for(let k of Object.keys(o)) { // Object.keys() возвращает массив имен свойств для объекта
                    keys += k;
                }
                console.log(keys);
                console.log(Object.keys(o));

            // Если не нужныключи а значения то Object.values()
                let o1 = { х: 1, у: 2, z: 3 };
                let keys1 = 0;
                for(let k1 of Object.values(o1)) { // Object.values() возвращает массив значений свойств для объекта
                    keys1 += k1;
                }
                console.log(keys1);
                console.log(Object.values(o1));

            // если нужны и ключи, и значения свойств объекта, то можно применить
            // цикл for/of с методом O b je c t . e n t r i e s ()
                let pairs = '';
                for(let [k2,v2] of Object.entries(o)) {     // Object.entries() представляет пару “ключ/значение” для одного свойства
                    pairs += k2 + v2;
                }
                console.log(pairs);
                console.log(Object.entries(o1));

            // for/of со строками
                // Строки в ES6 итерируемы по символам
                    let fr ={};
                    for (let lt of 'hehllo') {
                        if (fr[lt]) {
                            fr[lt]++;
                        } else {
                            fr[lt] = 1;
                        }
                    }
                    console.log(fr);
                // Обратите внимание, что итерация в строках производится по кодовым точкам
                // Unicode, а не по символам UTF-16

            // for/of с классами Set и Мар
                // Встроенные классы Set и Мар в ES6 являются итерируемыми
                // При итерации по Set с помощью for/of тело цикла выполняется однократно для каждого элемента множества.
                    // вывода уникальных слов из строки текста
                    let text = "Na na na na na na na na Batman!";
                    let wordSet = new Set(text.split(" "));
                    let unique = [];
                    for (let word of wordSet) {
                        unique.push(word);
                    }
                    console.log(unique);
                
                // итерация объекта Мар происходит по парам “ключ/значение”
                    let m = new Map([[1,'map']]);
                    for(let [key3, value3] of m) {
                        console.log(key3, value3);
                    }

                // Асинхронная итерация с помощью for/await
                    // В ES2018 вводится новый вид итератора, называемый асинхронным итератором
                    // и разновидность цикла for/of, известная как цикл for/await,
                    // который работает с асинхронными итераторами
                        // просто пример изучение позднее
                            // Читать порции из асинхронно итерируемого потока данных и выводить их
                            async function printStream(stream) {
                                for await (let c of stream) {
                                    console.log(c);
                                }
                            }

        
        // 5.4.5. for/in
            // цикл for/of требует итерируемого объекта после of    появилсяв ES6
            // цикл for/in работает с любым объектом после in       for/in с самого начала
                // for (переменная in объект)
                //     оператор

            for (let p in o) {
                console.log(o[p]);
            }

            // Чтобы выполнить оператор for/in , интерпретатор JavaScript сначала вычисляет
            // выражение объект.

            let o45 = { х: 1, у: 2, z: 3 }, a45 = [], i45 = 0;
            for (a45[i45++] in o45) ;
            console.log(o45);
            console.log(a45);

            // Массивы JavaScript — просто специализированный вид объектов
            // индексы массива представляют собой свойства, которые можно перечислять с помощью цикла for/in

            // Например, следующая строка, дополняющая предыдущий код, перечисляет индексы массива 0, 1 и 2
            for (let i in a45) console.log(i);