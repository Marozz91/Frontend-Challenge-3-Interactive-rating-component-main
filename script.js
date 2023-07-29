
(() => {

    const btnSubmit = document.getElementById("btnSubmit");
    const buttons = document.querySelectorAll(".btn");
    const para = document.getElementById("rating");

    btnSubmit.addEventListener("click", function () {

        document.querySelector(".thank-you-state").classList.remove("hidden");
        document.querySelector(".section-content").style.display = "none";

    });


    buttons.forEach(btn => {

        btn.addEventListener("click", function () {

            const text = btn.innerText;
            para.innerHTML = `You selected ${text} out of 5`

        });
    });


})();