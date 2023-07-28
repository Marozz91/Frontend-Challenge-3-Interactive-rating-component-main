
(() => {

    const btn = document.getElementById("btn");


    btn.addEventListener("click", () => {

        document.querySelector(".thank-you-state").style.visibility = "visible";
        document.querySelector(".section-content").style.visibility = "hidden";

    });


    const submitBtn1 = document.querySelector(".number1");
    const submitBtn2 = document.querySelector(".number2");
    const submitBtn3 = document.querySelector(".number3");
    const submitBtn4 = document.querySelector(".number4");
    const submitBtn5 = document.querySelector(".number5");

    submitBtn1.addEventListener("click", function () {

        const text = submitBtn1.innerText;
        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${text} out of 5`

    });


    submitBtn2.addEventListener("click", function () {

        const text = submitBtn2.innerText;
        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${text} out of 5`

    });


    submitBtn3.addEventListener("click", function () {

        const text = submitBtn3.innerText;
        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${text} out of 5`

    });

    submitBtn4.addEventListener("click", function () {

        const text = submitBtn4.innerText;
        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${text} out of 5`

    });


    submitBtn5.addEventListener("click", function () {

        const text = submitBtn5.innerText;
        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${text} out of 5`

    });




})();