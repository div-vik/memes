// const facebookBtn = document.querySelector(".facebook-btn");
// const tumblrBtn = document.querySelector(".tumblr-btn");
// const whatsappBtn = document.querySelector(".whatsapp-btn");
// const redditBtn = document.querySelector(".reddit-btn");
// const twitterBtn = document.querySelector(".twitter-btn");

// function init(){
//     const imgClass = document.getElementById("memeElement");
//     const heading = document.getElementById("title");

//     let title = encodeURI(heading.innerHTML);
//     let imgSRC = encodeURI(imgClass.src);

//     facebookBtn.setAttribute(
//         "href",
//         `https://www.facebook.com/sharer.php?u=${imgSRC}`
//     );
//     tumblrBtn.setAttribute(
//         "href",
//         `https://www.tumblr.com/share/link?url=${imgSRC}&name=${title}`
//     );
//     whatsappBtn.setAttribute(
//         "href",
//         `https://api.whatsapp.com/send?text=${title} ${imgSRC} `
//     );
//     redditBtn.setAttribute(
//         "href",
//         `https://reddit.com/submit?url=${imgSRC}&title=${title}`
//     );
//     twitterBtn.setAttribute(
//         "href",
//         `https://twitter.com/share?url=${imgSRC}&text=${title}`
//     );
// }

// init();

fetch("https://meme-api.herokuapp.com/gimme")
    .then(data => data.json())
    .then(memeData => {
        const heading = memeData.title;
        const memeURL = memeData.url;

        const title = document.getElementById("title");
        const memeElement = document.getElementById("memeElement");

        memeElement.src = memeURL;
        title.innerHTML = heading;
    });