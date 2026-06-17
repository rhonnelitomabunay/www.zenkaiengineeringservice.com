console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("messageForm");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault(); // 🔥 BLOCK URL PARAMETERS

        console.log("FORM BLOCKED");

        emailjs.sendForm(
            "service_s57n4di",
            "template_no5qz3n",
            form
        )
        .then(() => {

            alert("Message Sent Successfully!");
            form.reset();

        })
        .catch((error) => {

            console.error(error);
            alert("Failed to send message");

        });

    });

});