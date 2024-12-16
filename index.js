//password show

document.addEventListener('DOMContentLoaded', () => {
    const showicon2 = document.querySelector('#showimg2')
    const showicon = document.querySelector('#showimg')
    const password = document.querySelector('#password')
    const confrimpassword = document.querySelector('#Confrimpassword')
    showicon.addEventListener('click', function (e) {
        console.log("password");
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    });
    showicon2.addEventListener('click', function (e) {
        console.log('confrim');
        const type = confrimpassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confrimpassword.setAttribute('type', type);
    })
});




// valiadation
document.addEventListener('DOMContentLoaded', () => {
    const create = document.querySelector('.createbtn'); // Select the button with class 'createbtn'
    if (create) {
        create.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default form submission behavior
            var fullname = document.getElementById("fullname").value;
            var email = document.getElementById("email").value;
            var phonenumber = document.getElementById("number").value;
            var password = document.getElementById("password").value;
            var confrimpassword = document.getElementById("Confrimpassword").value;
            var box = document.getElementById("box").checked;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            var nameerr = document.getElementById("name_error");
            var emailerr = document.getElementById("email_error");
            var numerr = document.getElementById("num_error");
            var passworderr = document.getElementById("password_error");
            var confrimpasserr = document.getElementById("confrimpass_error");
            var checkerr = document.getElementById("check_error");
            console.log("hello");


            nameerr.innerText = '';
            emailerr.innerText = '';
            numerr.innerText = '';
            passworderr.innerText = '';
            confrimpasserr.innerText = '';
            checkerr.innerText = '';

            let isValid = true;

            if (!fullname) {
                nameerr.innerText = '*Full name is mandatory';
                isValid = false;
            }

            // Email validation
            if (!email) {
                emailerr.innerText = '*Email is mandatory';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailerr.innerText = '*Enter a valid email address';
                isValid = false;
            }

            // Phone number validation
            if (!phonenumber) {
                numerr.innerText = '*Phone number is mandatory';
                isValid = false;
            } else if (phonenumber.length !== 10 || isNaN(phonenumber)) {
                numerr.innerText = '*Enter a valid 10-digit phone number';
                isValid = false;
            }

            // Password validation
            if (!password) {
                passworderr.innerText = '*Password is mandatory';
                isValid = false;
            }

            // Confirm password validation
            if (!confrimpassword) {
                confrimpasserr.innerText = '*Confirm password is mandatory';
                isValid = false;
            } else if (password !== confrimpassword) {
                confrimpasserr.innerText = '*Passwords do not match';
                isValid = false;
            }

            // Checkbox validation
            if (!box) {
                checkerr.innerText = '*You must agree to the Terms';
                isValid = false;
            }

            // Submit the form if valid
            if (isValid) {
                alert('Form submitted successfully!');
                console.log('sumbit');

            } else {
                console.log('Form submission blocked due to validation errors.');
            }
        });
    } else {
        console.error('Button with class "createbtn" not found');
    }
});










document.addEventListener('DOMContentLoaded', () => {
    const flag = document.getElementById('flag');
    const options = document.getElementById('flagOptions');

    
    flag.addEventListener('click', () => {
        options.classList.toggle('active'); // Toggle visibility of the options
    });

    // Add event listener to each option in the dropdown
    const flagOptions = options.querySelectorAll('.option');
    flagOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedFlag = option.querySelector('.iconify').getAttribute('data-icon');
            const countryCode = option.getAttribute('data-code');
            
            // Update the flag display with the selected flag (optional)
            flag.innerHTML = `<span class="iconify" data-icon="flag:${countryCode}-4x3"></span>`;
            
            // Close the options after selecting
            options.classList.remove('active');
            
            // Optionally, set the country code in the phone input (if needed)
            // inputPhone.value = `${countryCode} ${inputPhone.value}`;
        });
    });
});

