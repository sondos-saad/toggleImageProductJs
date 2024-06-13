let BigImage = document.querySelector(".BigImage img");
let SmallImages = document.querySelectorAll(".SmallImages img");

SmallImages.forEach(image => {
    image.addEventListener("click", function (e) {
        let srcImage = e.target.src;
        BigImage.src = srcImage;
   
    })
})