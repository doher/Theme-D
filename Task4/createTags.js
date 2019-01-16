const div = document.createElement('div'),
    input = document.createElement('input'),
    button = document.createElement('button');

input.setAttribute('type', 'text');
input.setAttribute('id', 'tagInput');
input.setAttribute('value', '');
button.setAttribute('class', 'buttonInput');
button.setAttribute('onclick', 'createTag()');
button.innerHTML = 'add tag';

div.appendChild(input);
div.appendChild(button);
document.body.appendChild(div);

function createTag() {
    const div = document.createElement('div'),
        button = document.createElement('button'),
        span = document.createElement('span'),
        tag = document.getElementById('tagInput').value.trim(),
        spanArray = document.getElementsByTagName('span');

    if (tag) {
        button.setAttribute('onclick', 'removeTag(this)');
        div.setAttribute('class', 'tag');
        button.innerHTML = 'x';
        span.innerHTML = tag;

        div.appendChild(span);
        div.appendChild(button);

        if (spanArray.length) {
            let isExist = false;

            for (let i = 0; i < spanArray.length; ++i) {
                if (spanArray[i].textContent === tag) {
                    isExist = true;
                }
            }

            if (!isExist) {
                document.body.appendChild(div);
            }

        } else {
            document.body.appendChild(div);
        }
    }

    document.getElementById('tagInput').value = '';
}

function removeTag(node) {
    node.parentNode.parentNode.removeChild(node.parentNode);
}