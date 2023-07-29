
(() => {

    const btn = document.getElementById("btn");
    const rates = document.querySelectorAll(".number");
    const para = document.querySelector(".rating");



    btn.addEventListener("click", function () {

        document.querySelector(".thank-you-state").classList.remove("hidden");
        document.querySelector(".section-content").style.display = "none";

    });


    rates.forEach(rate => {

        rate.addEventListener("click", function () {

            const text = rate.innerText;
            para.innerHTML = `You selected ${text} out of 5`

        });
    });


})();