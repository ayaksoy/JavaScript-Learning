function showForm() {
    const formId = document.getElementById('tagSelector').value;
    document.querySelectorAll('.form').forEach(form => {
        form.classList.remove('active');
    });
    if (formId) {
        document.getElementById(formId).classList.add('active');
    }
}

function createDiv() {
    const id = document.getElementById('divId').value;
    const className = document.getElementById('divClass').value;
    const width = document.getElementById('divWidth').value;
    const height = document.getElementById('divHeight').value;
    
    const div = document.createElement('div');
    if (id) div.id = id;
    if (className) div.className = className;
    if (width) div.style.width = width;
    if (height) div.style.height = height;
    
    document.getElementById('output').appendChild(div);
}

function createPara() {
    const id = document.getElementById('paraId').value;
    const className = document.getElementById('paraClass').value;
    const text = document.getElementById('paraText').value;
    
    const para = document.createElement('p');
    if (id) para.id = id;
    if (className) para.className = className;
    if (text) para.textContent = text;
    
    document.getElementById('output').appendChild(para);
}

function createInput() {
    const id = document.getElementById('inputId').value;
    const className = document.getElementById('inputClass').value;
    const type = document.getElementById('inputType').value;
    const value = document.getElementById('inputValue').value;
    
    const input = document.createElement('input');
    if (id) input.id = id;
    if (className) input.className = className;
    if (type) input.type = type;
    if (value) input.value = value;
    
    document.getElementById('output').appendChild(input);
}

function createHead() {
    const id = document.getElementById('headId').value;
    const className = document.getElementById('headClass').value;
    const level = document.getElementById('headLevel').value;
    const text = document.getElementById('headText').value;
    
    const head = document.createElement('h' + level);
    if (id) head.id = id;
    if (className) head.className = className;
    if (text) head.textContent = text;
    
    document.getElementById('output').appendChild(head);
}
