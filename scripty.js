console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("messageForm");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault(); // 🔥 BLOCK URL REDIRECT

        console.log("FORM INTERCEPTED");

        emailjs.sendForm(
            "service_s57n4di",
            "template_no5qz3n",
            form
        )
        .then(function () {

            alert("Message Sent Successfully!");
            form.reset();

        })
        .catch(function (error) {

            console.log("FAILED:", error);
            alert("Failed to send message");

        });

    });

});