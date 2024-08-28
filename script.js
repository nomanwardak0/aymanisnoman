document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('agree');
    const submitButton = document.getElementById('submitButton');

    // Define the passwords to be checked
    const validPasswords = ['ayman', 'noman']; // List of valid passwords

    function checkForm() {
        // Convert the input password to lowercase for case-insensitive comparison
        const inputPassword = passwordInput.value.toLowerCase();

        // Check if the input password is in the list of valid passwords
        const isPasswordValid = validPasswords.includes(inputPassword);

        if (checkbox.checked && isPasswordValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    passwordInput.addEventListener('input', checkForm);
    checkbox.addEventListener('change', checkForm);

    document.getElementById('passwordForm').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (checkbox.checked && validPasswords.includes(passwordInput.value.toLowerCase())) {
            window.location.href = 'newpage.html'; // Redirect to the new page
        } else {
            alert('Incorrect password or terms not agreed.');
        }
    });
});
