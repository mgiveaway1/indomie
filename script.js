const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");

const all = document.querySelector(".all");
const verify = document.querySelector(".verify");
const share = document.querySelector(".share");
const whatsappBtn = document.querySelector(".whatsapp-btn");


//First question 
ul_1.addEventListener("click", function() {
    // console.log("hey it's clicked")
    q1.style.display = "none";
    q2.style.display = "block";
});

//Second question 
ul_2.addEventListener("click", function() {
    // console.log("hey it's clicked")
    q2.style.display = "none";
    q3.style.display = "block";
});

//Third question 
ul_3.addEventListener("click", function() {
    // console.log("hey it's clicked")
    q3.style.display = "none";
    q4.style.display = "block";
});

//Second question 
ul_4.addEventListener("click", function() {
    // console.log("hey it's clicked")
    all.style.display = "none";
    verify.style.display = "block";

});

ul_5.addEventListener("click", function() {
    // console.log("hey it's clicked")
    verify.style.display = "none";
    share.style.display = "block";

});

//loading
let container = document.querySelector(".container");
let fill = document.querySelector(".fill");
let click = document.querySelector(".click");

click.addEventListener('click',()=>{
    var a = 0;
    var run = setInterval(frames,50);
    function frames(){
        a = a+1;
        if(a == 101){
            clearInterval(run);
            container.style.display = "block";
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%";
            fill.style.width = a + "%";
        }
    }
})

//whatsapp share



function init() {
    const indImg = document.querySelector(".ind-img");
  
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("It's been 26 years of great taste. Indomie is celebrating it's 26 years of good taste.      Check this out, cash giveaways in collaboration with Indomie's 26th Anniversary.     I Have Recieved Mine.      Open this link to stand a chance of winning: ");
    let postImg = encodeURI(indImg.src);  

    whatsappBtn.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
      );
  
  }
  
  init();
  
