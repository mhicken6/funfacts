// var funfact = [
//     { fact: "the sky is blue", image: "./assets/image1.jpg" },
//     {
//         fact: "the office and atla are the best shows",
//         image: "./assets/image1.jpg",
//     },
//     { fact: "berlin is in germany", image: "./assets/image1.jpg" },
//     { fact: "printers are mean", image: "./assets/image1.jpg" },
//     { fact: "cheese is tasty", image: "./assets/image1.jpg" },
//     { fact: "it is fall", image: "./assets/image1.jpg" },
//     { fact: "bears are mammals", image: "./assets/image1.jpg" },
// ];

var funFacts = fetch("./facts.json")
    .then((res) => res.json())
    .then((data) => {
        var randomindex = Math.floor(Math.random() * data.length);
        var p = (document.querySelector("#funfact").innerHTML =
            data[randomindex].Fact);
        var desc = (document.querySelector("#description").innerHTML =
            data[randomindex].Explanation);
        console.log(data[randomindex].Fact);
        var randomimg = data[randomindex].Image;
        document.body.style.backgroundImage = `url(${randomimg})`;
    });
