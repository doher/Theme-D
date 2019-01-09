'use strict';

function getQuantityVowels(phrase) {
    let phraseArray = phrase.toLowerCase().split(''),
        existingVowels = 'аеёоиэуыяю',
        count = phraseArray.reduce((result, value) => result + (existingVowels.indexOf(value) >= 0), 0);

    return count;
}

console.log('*** Reduce() ***');
console.log(getQuantityVowels('ЯблОко'));
console.log(getQuantityVowels('яблОкооооооОООооооооооооо'));
console.log(getQuantityVowels('блк'));