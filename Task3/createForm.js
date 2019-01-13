const formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { label: 'Опубликовать:', kind: 'submit' },
    ],
    formDef2 = [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { label: 'Зарегистрироваться:', kind: 'submit' },
    ],
    lengthForm1 = formDef1.length,
    lengthForm2 = formDef2.length,
    form1 = document.createElement('form'),
    form2 = document.createElement('form'),
    srcAction = 'http://fe.it-academy.by/TestForm.php';

form1.setAttribute('action', srcAction);
form1.setAttribute('name', 'formDef1');
form1.setAttribute('method', 'POST');
form1.setAttribute('target', '_blank');

form2.setAttribute('action', srcAction);
form2.setAttribute('name', 'formDef2');
form2.setAttribute('method', 'POST');
form2.setAttribute('target', '_blank');

function addElement(item, form) {
    const div = document.createElement('div'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        textarea = document.createElement('textarea'),
        button = document.createElement('button'),
        select = document.createElement('select'),
        option = document.createElement('option');

    switch (item.kind) {
        case 'longtext':
            label.innerHTML = item.label;
            div.appendChild(label);

            input.setAttribute('type', 'text');
            input.setAttribute('name', item.name);
            input.style.width = '400px';
            div.appendChild(input);
            break;

        case 'number':
        case 'shorttext':
            label.innerHTML = item.label;
            div.appendChild(label);

            input.setAttribute('type', 'text');
            input.setAttribute('name', item.name);
            input.style.width = '80px';
            div.appendChild(input);
            break;

        case 'combo':
            label.innerHTML = item.label;
            div.appendChild(label);

            item.variants.forEach(function (element) {
                const cloneOption = option.cloneNode();

                cloneOption.innerHTML = element.text
                cloneOption.setAttribute('value', element.value);
                select.appendChild(cloneOption);
            })

            div.appendChild(select);
            break;

        case 'radio':
            label.innerHTML = item.label;
            div.appendChild(label);

            item.variants.forEach(function (element, index) {
                const cloneInput = input.cloneNode(),
                    textNode = document.createTextNode(element.text);

                cloneInput.setAttribute('type', 'radio');
                cloneInput.setAttribute('name', 'public');
                cloneInput.setAttribute('value', index);
                div.appendChild(cloneInput);
                div.appendChild(textNode);
            })
            break;

        case 'check':
            label.innerHTML = item.label;
            div.appendChild(label);

            input.setAttribute('type', 'checkbox');
            input.setAttribute('checked', 'checked');
            input.setAttribute('name', item.name);
            div.appendChild(input);
            break;

        case 'memo':
            label.innerHTML = item.label;
            textarea.setAttribute('name', item.name);
            div.appendChild(textarea);
            break;

        case 'submit':
            button.innerHTML = item.label;
            div.appendChild(button);
            break;

        default:
            label.innerHTML = item.label;
            div.appendChild(label);

            input.setAttribute('type', 'text');
            input.setAttribute('name', item.name);
            div.appendChild(input);
            break;
    }

    form.appendChild(div);
}

for (let i = 0; i < lengthForm1; ++i) {
    const item = formDef1[i];

    addElement(item, form1);
}

document.body.appendChild(form1);

for (let i = 0; i < lengthForm2; ++i) {
    const item = formDef2[i];

    addElement(item, form2);
}

document.body.appendChild(form2);