document.getElementById("btn").addEventListener("click",function(){
    window.location.href = "Assets/Login&Signin/login.html";
})


// navbar function
document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('r_nav');
    // Toggle the 'active' class to open and close the navigation menu
    navLinks.classList.toggle('active');
});







// contact_us

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});
