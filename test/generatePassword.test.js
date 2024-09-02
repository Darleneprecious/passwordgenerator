
// const assert = require('assert');
// const { generatePassword } = require('../generatePassword');

// describe('generatePassword', function () {
//     it('should generate a password of the correct length', function () {
//         const length = 10;
//         const password = generatePassword('low', length);
//         assert.strictEqual(password.length, length);
//     });

//     it('should only contain lowercase letters for low strength', function () {
//         const password = generatePassword('low', 10);
//         assert.match(password, /^[a-z]+$/);
//     });

//     it('should contain both uppercase and lowercase letters and numbers for medium strength', function () {
//         const password = generatePassword('medium', 10);
//         assert.match(password, /^[a-zA-Z0-9]+$/);
//     });

//     it('should contain letters, numbers, and special characters for high strength', function () {
//         const password = generatePassword('high', 10);
//         assert.match(password, /^[a-zA-Z0-9!@#$%^&*()_+\[\]{}|;:,.<>?]+$/);
//     });

//     it('should throw an error for an invalid strength level', function () {
//         assert.throws(() => generatePassword('invalid', 10), /Invalid strength level/);
//     });
// });



// test/generatePassword.test.js

const assert = require('assert');
const { generatePassword } = require('../generatePassword');

describe('generatePassword', function () {
    it('should generate a password of the correct length', function () {
        const length = 10;
        const password = generatePassword('low', length);
        assert.strictEqual(password.length, length);
    });

    it('should only contain lowercase letters for low strength', function () {
        const password = generatePassword('low', 10);
        assert.match(password, /^[a-z]{10}$/);
    });

    it('should contain uppercase, lowercase letters and numbers for medium strength', function () {
        const password = generatePassword('medium', 10);
        assert.match(password, /^[a-zA-Z0-9]{10}$/);
    });

    it('should contain letters, numbers, and special characters for high strength', function () {
        const password = generatePassword('high', 10);
        assert.strictEqual(password.length, 10);
        assert.match(password, /^[\w!@#$%^&*()_+\[\]{}|;:,.<>?]{10}$/);
    });

    it('should throw an error for an invalid strength level', function () {
        assert.throws(() => generatePassword('invalid', 10), /Invalid strength level/);
    });

    it('should throw an error for invalid length input', function () {
        assert.throws(() => generatePassword('low', -5), /Invalid length/);
    });
});
