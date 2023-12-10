function validateSignup() {
    var signupUsername = document.getElementById('signupUsername').value;
    var signupPassword = document.getElementById('signupPassword').value;

    // Basic validation, you can add more complex validation as needed
    if (signupUsername && signupPassword) {
        alert('Sign Up successful!'); // You can add code to send data to the server for registration
    } else {
        alert('Please fill in all fields.');
    }
}

function validateLogin() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Basic validation, you can add more complex validation as needed
    if (loginUsername && loginPassword) {
        alert('Login successful!'); // You can add code to send data to the server for authentication
    } else {
        alert('Please fill in all fields.');
    }
}
