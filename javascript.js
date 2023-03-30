

 const imageSlider =[
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/62d1db714bbec85e.jpg?q=50",
        link :"https://www.flipkart.com/travel/flights?param=Travel-DTHPW-DOM999ASSUREDGIFT_26thMar&otracker=hp_bannerads_1_2.bannerAdCard.BANNERADS_FLYNOVS_OUHIEY704LKC"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/112b0206a861accc.jpg?q=50",
        link :"#"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/f1cd22394aa28e3c.jpg?q=50",
        link :"#"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/62d1db714bbec85e.jpg?q=50",
        link :"#"
    },
    {
        img:"https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/f1cd22394aa28e3c.jpg?q=50",
        link :"#"
    },
]

let imageSliderListEl = document.querySelector(".imageSliderList");
let imageSliderListHTML = "";

imageSlider.forEach(el =>{
    imageSliderListHTML += `
    <div class="imageSliderItem">
       <a href="${el.link}">
        <img src="${el.img}" alt="">
       </a>
    </div>
           
    ` 
})

imageSliderListEl.innerHTML =  imageSliderListHTML ;

let prev_imgBtnEl = document.getElementById("prev_imgBtn");
let next_imgBtn = document.getElementById("next_imgBtn");
let start =0; 
let end = -400;

prev_imgBtnEl.addEventListener("click",handlePreveImage);
next_imgBtn.addEventListener("click", handleNextImage)

function handlePreveImage(){
    alert("preve_btn")

}

function handleNextImage(){
    alert("next_btn")
}





