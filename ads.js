document.addEventListener("DOMContentLoaded", function() {
    var ads = [
    {
        url: "https://lu7.io/musicfromash",
        image: "https://cdn.luckvintage.com/ads/musicfromash.png",
        alt: "Music From Ash Advertisement",
    },
    {
        url: "https://lu7.io/lu7creative",
        image: "https://cdn.luckvintage.com/ads/lu7creative.gif",
        alt: "LU7 Creative Advertisement",
    },
];

function getRandomAd() {
    var randomIndex = Math.floor(Math.random() * ads.length);
    var ad = ads[randomIndex];
    return ad;
}

var randomAd = getRandomAd();
var adHTML = '<a href="' + randomAd.url + '" target="_blank">' + '<img src="' + randomAd.image + '" alt="' + randomAd.alt + '">' + "</a>";
document.getElementById("randomAd").innerHTML = adHTML;
});