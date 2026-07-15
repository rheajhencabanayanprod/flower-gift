window.onload = function () {

    const flower = document.querySelector(".flower");
    const title = document.querySelector("h1");
    const message = document.querySelector(".message");

    flower.style.transform = "scale(0)";
    flower.style.opacity = "0";

    setTimeout(() => {
        flower.style.transition = "2s";
        flower.style.transform = "scale(1)";
        flower.style.opacity = "1";
    }, 500);

    title.style.opacity = "0";
    message.style.opacity = "0";

    setTimeout(() => {
        title.style.transition = "1.5s";
        title.style.opacity = "1";
    }, 2500);

    setTimeout(() => {
        message.style.transition = "2s";
        message.style.opacity = "1";
    }, 4000);

};
