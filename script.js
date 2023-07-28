
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

        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${1} out of 5`

    });


    submitBtn2.addEventListener("click", function () {


        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${2} out of 5`

    });


    submitBtn3.addEventListener("click", function () {


        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${3} out of 5`

    });

    submitBtn4.addEventListener("click", function () {


        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${4} out of 5`

    });


    submitBtn5.addEventListener("click", function () {

        const para = document.querySelector(".rating");
        para.innerHTML = `You selected ${5} out of 5`

    });




})();