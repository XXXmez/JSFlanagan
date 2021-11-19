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