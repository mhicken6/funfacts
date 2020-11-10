var funfact = [
    { fact: "the sky is blue", image: "./assets/image1.jpg" },
    {
        fact: "the office and atla are the best shows",
        image: "./assets/image1.jpg",
    },
    { fact: "berlin is in germany", image: "./assets/image1.jpg" },
    { fact: "printers are mean", image: "./assets/image1.jpg" },
    { fact: "cheese is tasty", image: "./assets/image1.jpg" },
    { fact: "it is fall", image: "./assets/image1.jpg" },
    { fact: "bears are mammals", image: "./assets/image1.jpg" },
];

var p = document.querySelector("#funfact");

var randomindex = Math.floor(Math.random() * funfact.length);
var randomfact = funfact[randomindex].fact;
p.innerHTML = randomfact;

var randomimg = funfact[randomindex].image;

document.body.style.backgroundImage = `url(${randomimg})`;
