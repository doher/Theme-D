'use strict';

function getQuantityVowels(phrase) {
    let phraseArray = phrase.toLowerCase().split(''),
        existingVowels = 'аеёоиэуыяю';

    return phraseArray.filter(value => existingVowels.indexOf(value) >= 0).length;
}

console.log('*** Filter() ***');
console.log(getQuantityVowels('ЯблОко'));
console.log(getQuantityVowels('яблОкооооооОООооооооооооо'));
console.log(getQuantityVowels('блк'));
