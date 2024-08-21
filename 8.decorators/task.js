//Задача № 1
const md5 = (...args) => args.join("--");


function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    return (...args) => {
        let hash = md5(args);
        let findObject = cache.find(el => el.hash === hash);
        if (findObject) {
            return "Из кеша: " + findObject.result;
        }       
        let result = func(...args);
        cache.push({hash, result});
        cache = cache.slice(-maxCacheValuesCount);
        return "Вычисляем: " + result;
    };
}

let mult = (...args) => args.reduce((a, b) => a * b, 1);
let multCashed = cachingDecoratorNew(mult);
console.log(multCashed(2, 2, 4));
console.log(multCashed(2, 2, 5));
console.log(multCashed(2, 2, 6));
console.log(multCashed(2, 2, 7));
console.log(multCashed(2, 2, 8));
console.log(multCashed(2, 2, 8));
console.log(multCashed(2, 2, 3));
console.log(multCashed(2, 2, 4));

//Задача № 2
let sum = (...args) => args.reduce((a, b) => a + b, 0);

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
        wrapper.allCount++;
        const callback = () => {
            wrapper.count++;
            func(...args);
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        } else {
            callback();
        }
        timeoutId = setTimeout(callback, delay);
    }
    return wrapper;
} 


// function debounceDecoratorNew(func, delay) {
//     let timeoutId = null;
//     wrapper.count = 0;
//     wrapper.countAll = 0;

//     function wrapper(...args) {
//         wrapper.countAll++;
//         const callBack = () => {
//             wrapper.count++;
//             console.log(func(...args));
//         }
//         if (!timeoutId) {
//             callBack();
//         }

//         setTimeout(() => {
//             if (timeoutId) {
//                 clearTimeout(timeoutId);
//             }
//             callBack();
//         }, delay);
//     }
//     return wrapper;
// }




// Решение эксперта
// function debounceDecoratorNew(func, delay) {
//     let timeoutId = null;
//     wrapper.count = 0;
//     wrapper.allCount = 0;
  
//     function wrapper(...args) {
//       wrapper.allCount++;
  
//       if(timeoutId === null) {
//         func(...args);
//         wrapper.count++;
//       }
  
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         wrapper.count++;
//         func(...args);
//       }, delay);
//     }
  
//     return wrapper;
//   }
  
//   module.exports = {
//     debounceDecoratorNew, 
//   }