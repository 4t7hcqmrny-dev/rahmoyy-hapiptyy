// password protection functionality
const password = 'sasa';

function checkPassword(inputPassword) {
    if (inputPassword === password) {
        return 'Access granted!';
    } else {
        return 'Access denied!';
    }
}

// Example usage:
console.log(checkPassword('sasa'));  // Should log: Access granted!
console.log(checkPassword('wrongPassword'));  // Should log: Access denied!