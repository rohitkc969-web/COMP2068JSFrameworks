// Import required modules
const connect = require('connect');
const http = require('http');
const url = require('url');

// Create a Connect app
const app = connect();

// Function to calculate math operations
function calculate(req, res) {
    const query = url.parse(req.url, true).query;

    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    let result;
    let operator;

    if (!method || isNaN(x) || isNaN(y)) {
        res.end('Error: Please provide method, x, and y parameters correctly.');
        return;
    }

    switch (method.toLowerCase()) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error: Division by zero is not allowed.');
                return;
            }
            result = x / y;
            operator = '/';
            break;
        default:
            res.end('Error: Invalid method. Use add, subtract, multiply, or divide.');
            return;
    }

    res.end(`${x} ${operator} ${y} = ${result}`);

}

// Use the calculate function for all requests
app.use(calculate);

// Create and start the server
http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});