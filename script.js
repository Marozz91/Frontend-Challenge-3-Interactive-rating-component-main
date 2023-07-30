
(() => {

    const buttons = document.querySelectorAll(".btn");
    const btnSubmit = document.getElementById("btnSubmit");
    const ratingPara = document.getElementById("ratingPara");


    buttons.forEach(btn => {

        btn.addEventListener("click", function () {

            const text = btn.innerText;
            ratingPara.innerHTML = `You selected ${text} out of 5`;

        });

    });


    btnSubmit.addEventListener("click", function () {

        document.querySelector(".thank-you-state").classList.remove("hidden");
        document.querySelector(".section-content").style.display = "none";

    });

})();