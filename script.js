// step - 2
document.getElementById('submitBtn').addEventListener('click', function() {
    let input = document.getElementById('inputField').value;
    document.getElementById('output').innerText = "You entered: " + input;
});

// step - 3
document.getElementById('addBtn').addEventListener('click', function() {
    let newButton = document.createElement('button');
    newButton.innerText = "New Button";
    document.getElementById('buttonContainer').appendChild(newButton);
});

document.getElementById('buttonContainer').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        alert('You clicked ' + e.target.innerText);
    }
});

// step - 4
document.getElementById('submitBtn').addEventListener('click', function() {
    let input = document.getElementById('inputField').value;
    if (input === "") {
        document.getElementById('output').innerText = "Error: Input cannot be empty!";
    } else {
        document.getElementById('output').innerText = "You entered: " + input;
    }
});

// step - 5
let observers = [];

function addObserver(observer) {
    observers.push(observer);
}

document.getElementById('inputField').addEventListener('input', function() {
    let value = this.value;
    observers.forEach(function(observer) {
        observer.innerText = "Updated with: " + value;
    });
});

// Adding buttons as observers
let btn1 = document.createElement('button');
btn1.innerText = "Observer 1";
document.getElementById('buttonContainer').appendChild(btn1);
addObserver(btn1);

let btn2 = document.createElement('button');
btn2.innerText = "Observer 2";
document.getElementById('buttonContainer').appendChild(btn2);
addObserver(btn2);