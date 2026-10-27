document.getElementById('submitBtn').addEventListener('click', function() {
    let input = document.getElementById('inputField').value;
    document.getElementById('output').innerText = "You entered: " + input;
});

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

document.getElementById('submitBtn').addEventListener('click', function() {
    let input = document.getElementById('inputField').value;
    if (input === "") {
        document.getElementById('output').innerText = "Error: Input cannot be empty!";
    } else {
        document.getElementById('output').innerText = "You entered: " + input;
    }
});