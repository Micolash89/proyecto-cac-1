(() => {

    const form = document.querySelector("#form");
    const input = form.querySelector("#firstName_lastName");
    const successMessage = document.querySelector("#successMessage");

    input.addEventListener("input", () => {
        if (input.value.length < 3) {
            input.classList.remove("okey");
            input.classList.add("error");
        } else {
            input.classList.remove("error");
            input.classList.add("okey");
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        successMessage.classList.remove("hidden");

        form.reset();
        input.classList.remove("okey");

        setTimeout(() => {
            successMessage.classList.add("hidden");
        }, 3000); // Oculta el mensaje después de 3 segundos

    });

})()