document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone_number').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Validate First and Last Name
    if (firstName === '' || lastName === '') {
        valid = false;
        alert('First Name and Last Name are required.');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        alert('Please enter a valid email.');
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        valid = false;
        alert('Please enter a valid 10-digit phone number.');
    }

    // Validate Password
    if (password.length < 8) {
        valid = false;
        alert('Password must be at least 8 characters long.');
    }

    if (valid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            password: password
        };

        console.log(formData);
    }
});
