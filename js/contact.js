document.addEventListener("DOMContentLoaded", function () {
    const contactMethodSelect = document.getElementById("contactMethod");
    const emailInputDiv = document.getElementById("emailInput");
    const phoneInputDiv = document.getElementById("phoneInput");
    const emailLabel = emailInputDiv.querySelector("label");
    const phoneLabel = phoneInputDiv.querySelector("label");

    // Event listener for dropdown changes
    contactMethodSelect.addEventListener("change", function () {
        const selectedMethod = contactMethodSelect.value;

        // Hide both input fields initially
        emailInputDiv.style.display = "none";
        phoneInputDiv.style.display = "none";
        
        // Show the selected input field with specific label text
        if (selectedMethod === "email") {
            emailInputDiv.style.display = "block";
            emailLabel.textContent = "Enter your email";
        } else if (selectedMethod === "phone") {
            phoneInputDiv.style.display = "block";
            phoneLabel.textContent = "Enter your phone";
        }
    });
});
