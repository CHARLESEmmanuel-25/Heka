document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const transportSelect = document.getElementById("transport");
    const transportOptions = document.querySelectorAll(".transport-option");
    const inputs = document.querySelectorAll("input, select");

    // Sélection du mode de transport via icône
    transportOptions.forEach(option => {
        option.addEventListener("click", function () {
            transportOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            const transportValue = this.querySelector("span").innerText.toLowerCase();
            transportSelect.value = transportValue;
        });
    });

    // Validation du formulaire
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#E2E8F0";
            }
        });

        if (!transportSelect.value) {
            isValid = false;
            transportSelect.style.borderColor = "red";
        } else {
            transportSelect.style.borderColor = "#E2E8F0";
        }

        if (isValid) {
            alert("Inscription réussie ! Nous vous contacterons bientôt.");
            form.reset();
            transportOptions.forEach(opt => opt.classList.remove("selected"));
        }
    });
});
