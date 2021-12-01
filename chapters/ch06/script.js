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

// 6.1. Введение в объекты
    // Объект — это составное значение
    // он агрегирует множество значений (элементарные значения или другие объекты)
    // позволяет хранить и извлекать внутренние значения по имени

    // объект это неупорядоченная колекция свойств
    
    // В JavaScript любое значение, отличающееся от строки, числа, значения
        // Symbol, true, false, null или undefined -- является объектом
    
    // В дополнение к имени и значению каждое свойство имеет три атрибута свойства
        // атрибут writable (допускает запись) указывает, можно ли устанавливать значение свойства
        // атрибут enumerable (допускает перечисление) указывает, возвращается ли имя свойства в цикле for/in ;
        // атрибут configurable (допускает конфигурирование) указывает, можно ли удалять свойство и изменять его атрибуты;

    // По умолчанию все свойства созданные пользователем, докускают запись/перечисление/конфигурирование


// 6.2. Создание объектов