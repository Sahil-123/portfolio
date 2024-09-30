// toggle icon navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}



//  scrollable section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });

    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// Contact form validation 

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
}

function validateText(text) {
    const textPattern = /^[a-zA-Z\s]*$/;
    return textPattern.test(text);
}

function showError(inputElement, errorMessage) {
    const errorSpan = inputElement.parentElement.querySelector('.errorMessage');
    errorSpan.textContent = errorMessage;
    errorSpan.style.visibility = 'visible';  // Make the error message visible
    inputElement.classList.add('errorBorder');
}

function clearError(inputElement) {
    const errorSpan = inputElement.parentElement.querySelector('.errorMessage');
    errorSpan.textContent = '';
    errorSpan.style.visibility = 'hidden';  // Hide the error message
    inputElement.classList.remove('errorBorder');
}

function submitForm(event) {
    event.preventDefault();  // Prevent form submission for validation
    let isValid = true;

    // Get form element
    const form = document.getElementById('contactForm');
    
    // Get input elements
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const mobileInput = form.querySelector('input[name="mobile"]');
    const subjectInput = form.querySelector('input[name="subject"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Validate Name
    if (!nameInput.value.trim() || !validateText(nameInput.value.trim())) {
        showError(nameInput, 'Name cannot contain special characters or be empty.');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // Validate Email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Validate Mobile Number
    if (!validateMobile(mobileInput.value.trim())) {
        showError(mobileInput, 'Mobile number must be exactly 10 digits.');
        isValid = false;
    } else {
        clearError(mobileInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim() || !validateText(subjectInput.value.trim())) {
        showError(subjectInput, 'Subject cannot contain special characters or be empty.');
        isValid = false;
    } else {
        clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
        showError(messageInput, 'Message cannot be empty.');
        isValid = false;
    } else {
        clearError(messageInput);
    }

    // If the form is valid, allow form submission
    if (isValid) {
        alert('Form submitted successfully!');
        // Submit the form if validation passes
    }
}













// Scroll Reveal for animation
ScrollReveal ( {
    // reset: true,
    distance : '80px',
    duration : 2000,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });


// Typed.js
const typed = new Typed('.multiple-text', {
    strings : ['Java FullStack Developer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 2000,
    loop: true
})




