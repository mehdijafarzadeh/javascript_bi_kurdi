
function calculate() {
    let num1 = parseInt(document.getElementById('num1').value);
    let operation = document.getElementById('operation').value;
    let num2 = parseInt(document.getElementById('num2').value);
    

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
    }

    document.getElementById('result').innerText = 'Encam: ' + result;
}
