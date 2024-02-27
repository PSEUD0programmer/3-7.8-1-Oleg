let greetBtn = document.getElementById('greetBtn');
let nameInput = document.getElementById('nameInput');
let greetingMessage = document.getElementById('greetingMessage');

let changeBgColor = document.getElementById('changeBgColorBtn');
let changeFontBtn = document.getElementById('changeFontBtn');
let changeColorBtn = document.getElementById('changeColorBtn');

let featureList = document.getElementById('featureList');

greetBtn.onclick = function () {
    let name = nameInput.value;
    if (name !== '') {
        greetingMessage.innerText = `Привет ${name}!`;
        nameInput.value = '';
    }
}

changeBgColor.onclick = function () {
    if (document.body.style.backgroundColor != 'pink') {
        document.body.style.backgroundColor = 'pink';
    }
    else document.body.style.backgroundColor = '#f0e6ff';
}

changeFontBtn.onclick = function () {
    document.querySelector('h1').style.fontFamily = 'Times New Roman';
}

changeColorBtn.onclick = function () {
    let buttons = document.querySelectorAll('button');

    buttons.forEach(function (item) {
        if (item.style.backgroundColor != 'pink') {
            item.style.backgroundColor = 'pink';
        }
        else item.style.backgroundColor = '#9370db';
        
    })
}

featureList.addEventListener('mousemove', function () {
    let listItem = featureList.querySelectorAll('li');
    listItem.forEach(function (item) {
        item.style.color = 'red';
    })
})