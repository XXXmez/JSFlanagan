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