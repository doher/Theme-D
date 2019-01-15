const div = document.createElement('div'),
    input = document.createElement('input'),
    button = document.createElement('button');

input.setAttribute('type', 'text');
input.setAttribute('id', 'tagInput');
input.setAttribute('value', '');
button.setAttribute('onclick', 'createTag()');
button.innerHTML = 'add tag';

div.appendChild(input);
div.appendChild(button);
document.body.appendChild(div);

function createTag() {
    const div = document.createElement('div'),
        button = document.createElement('button'),
        tag = document.getElementById('tagInput').value,
        divArray = document.getElementsByClassName('tag') || [];

    if (tag) {
        button.setAttribute('onclick', 'removeTag(this)');
        div.setAttribute('class', 'tag');
        button.innerHTML = 'x';

        div.innerHTML = tag;
        div.appendChild(button);

        // for (let i = 0; i < divArray.length; ++i) {

        //     if (divArray[i].textContent == tag) {
                document.body.appendChild(div);
        //     }
        // }
    }

    console.log(div.textContent);
    console.log(divArray.length);
    console.log(divArray[0].textContent);

    document.getElementById('tagInput').value = '';
}

function removeTag(node) {
    node.parentNode.parentNode.removeChild(node.parentNode);
}