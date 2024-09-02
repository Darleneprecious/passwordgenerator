function generatePassword(strength, length) {
    const lowCharset = 'abcdefghijklmnopqrstuvwxyz';
    const mediumCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const highCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';

    let charset = '';
    switch (strength) {
        case 'low':
            charset = lowCharset;
            break;
        case 'medium':
            charset = mediumCharset;
            break;
        case 'high':
            charset = highCharset;
            break;
        default:
            throw new Error('Invalid strength level. Choose between "low", "medium", or "high".');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
document.getElementById('generateBtn').addEventListener('click', () => {
    const strength = document.getElementById('strength').value;
    const length = parseInt(document.getElementById('length').value, 10);
    const password = generatePassword(strength, length);
    passwordInput = document.getElementById('password');
    passwordInput.value = password;



    if (strength === 'low') {
        passwordInput.style.color = 'red';
    } else if (strength === 'medium' || strength === 'high') {
        passwordInput.style.color = 'green';
    }
});

module.exports = { generatePassword };
