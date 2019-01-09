'use strict';

function getQuantityVowels(phrase) {
    let phraseArray = phrase.toLowerCase().split(''),
        existingVowels = 'аеёоиэуыяю',
        count = 0;

    phraseArray.forEach(function (value) {

        if (existingVowels.indexOf(value) >= 0) {
            count++;
        }
    });

    return count;
}

console.log('*** ForEach() ***');
console.log(getQuantityVowels('ЯблОко'));
console.log(getQuantityVowels('яблОкооооооОООооооооооооо'));
console.log(getQuantityVowels('блк'));