// scripts.js

// Function to validate the membership form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const plan = document.getElementById('plan').value;

    if (name === '' || email === '' || plan === '') {
        alert('All fields are required!');
        return false;
    }
    return true;
}

// Event listener for form submission
document.getElementById('membershipForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});