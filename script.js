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