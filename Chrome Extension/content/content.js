var funFacts = fetch("facts.json")
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
