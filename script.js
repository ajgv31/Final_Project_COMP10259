document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        let messages = [];

        // Get field values
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("eadd").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const msg = document.getElementById("msg").value.trim();
        const date = document.getElementById("bdate").value.trim();

        // Get error message spans
        const fnameErr = document.getElementById("fname-error");
        const lnameErr = document.getElementById("lname-error");
        const emailErr = document.getElementById("email-error");
        const phoneErr = document.getElementById("phone-error");
        const msgErr = document.getElementById("msg-error");
        const dateErr = document.getElementById("date-error");

        // Clear previous error messages
        fnameErr.textContent = "";
        lnameErr.textContent = "";
        emailErr.textContent = "";
        phoneErr.textContent = "";
        msgErr.textContent = "";
        dateErr.textContent = "";

        // Validate first name
        if (fname === "" || fname.length < 5) {
            messages.push(fnameErr.textContent = "Please enter your first name. First name should be at least 5 characters.");
            
        }

        // Validate last name
        if (lname === "" || lname.length < 5) {
            messages.push(lnameErr.textContent = "Please enter your last name. Last name should be at least 5 characters.");
            
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "" || !emailPattern.test(email)) {
            messages.push(emailErr.textContent = "Please enter a valid email address.");
        }

        // Validate phone
        if (phone === "" || phone.length < 12) { // Adjusted to account for hyphens
            messages.push(phoneErr.textContent = "Phone number must be in the format 123-456-7890.");
        }

        // Validate message
        if (msg === "" || msg.length < 50) {
            messages.push(msgErr.textContent = "Message should contain at least 50 characters.");
        }

        // Validate date (dd/mm/yyyy)
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (date === "" || !datePattern.test(date)) {
            messages.push(dateErr.textContent = "Please enter a valid date in dd/mm/yyyy format.");
        }

        // If there are error messages, prevent form submission and show errors
        if (messages.length > 0) {
            e.preventDefault();
        }
    });
});
