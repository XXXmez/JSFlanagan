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

addContent('Условные операторы', 'if и switch');

