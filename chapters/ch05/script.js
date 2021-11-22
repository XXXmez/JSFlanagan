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