// Возврашает массив где ближайшие значения не посторяются 
var uniqueInOrder=function(iterable){
    if (typeof iterable == 'string') {
        let arr = iterable.split('')
        for (let i = 0; i < arr.length; i++) {
            if (''+arr[i]==''+arr[i+1]) {
                delete arr[i]
            }
        }
        return arr.join('').split('')
    } else if (typeof [1,2,2,3,3] == 'object') {
        let arr = iterable
        for (let i = 0; i < arr.length; i++) {
            if (''+arr[i]==''+arr[i+1]) {
                delete arr[i]
            }
        }
        let newArr = arr.slice('').join('').split('');
        let osArr = [];
        for (let i = 0; i < newArr.length; i++) {
            if (+newArr[i]) {
                osArr.push(+newArr[i])
            } else {
                osArr.push(newArr[i])
            }
            
        }
        return osArr
    }
}

console.log(uniqueInOrder(['a','a','B','c','C']));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));


// Считаем сумму между двумя переданными числами
function getSum( a,b ) {
    let sum = 0;
    if (a == b) {
        sum = a;
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum
}

console.log(getSum( 0,-1 ));


// Считает сколько нужно лет для подсчета через сколько лет население достигнет нужного момента
function nbYear(p0, percent, aug, p) {
    let now = p0,
        dat = 0;
    for(let i = 0; now < p; i++) {
        now = now + (now * percent / 100) + aug;
        dat++;
    }
    return dat
}

console.log(nbYear(1500, 5, 100, 5000));


// возвращает массив только чисел
function filter_list(l) {
    let newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] == 'number') {
            newArr.push(l[i])
        }
    }
    return newArr
}

console.log(filter_list([1,2,'aasf','1','123',123]));


// максимальное число - в разработке =)
var maxSequence = function(arr){
    let sum = 0,
    negative = arr.every(i => i < 0);   // проверяет не состоит ли весь массив из отрицательных чисел

    if (0 == arr.length) {
        return 0;
    } else if (negative) {
        return 0;
    } else {
        
    }
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));