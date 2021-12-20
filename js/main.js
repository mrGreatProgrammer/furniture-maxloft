const loaderWelcome = document.querySelector('.loader-welcome');

const theLoader = document.querySelector(".the-loader");
const theLoaderProgress = document.querySelector(".the-loader-progress");

const theSite = document.querySelector('.the-site');

const toTopUpEl = document.querySelector("#to-top-up")

// LOADER
var i =0 
var inID = setInterval(() => {
i += 50

  theLoaderProgress.style.width = i + "px";
}, 500);


setTimeout(() => {
    clearInterval(inID)
    console.log("h");
    loaderWelcome.style.display = "none";
    setTimeout(() => {
        theSite.style.display = "block"
    }, 500);
    
}, 5500);


// SCROLLING
window.onscroll = () => {
  if (window.scrollY > 700) {
    toTopUpEl.classList.remove('isShowBtn_hide')
  } else if (window.scrollY < 700) {
    toTopUpEl.classList.add('isShowBtn_hide')
  }
};

toTopUpEl.onclick = () => {
  window.scrollTo(0, 0)
}