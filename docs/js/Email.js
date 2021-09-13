src = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
    (function() {
        emailjs.init("user_7VWazXfq5MXqce2crQLfw");
    })();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (document.getElementById("userEmail").value.length == 0) {
            alert("Please fill areas to contact me!");
        } else {
            emailjs.sendForm('service_lfsjdaz', 'template_9mj2g1d', this)
                .then(function() {
                    console.log('SUCCESS!');
                    alert("Please fill areas to contact me!");
                }, function(error) {
                    console.log('FAILED...', error);
                });

        }
    });
}