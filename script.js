//
const canvas = document.getElementById('canvas');
// canvas object (ctx) will be used to draw image
const ctx = canvas.getContext('2d');
// 2.get the  name
const nameInput = document.getElementById('name');
// 3.provide download feature
const downloadBtn = document.getElementById('download-btn');


// 1. loading certificate image
const image = new Image(); // creating image
image.src = "certificate.jpg" //passing the link of the file(img.jpg)
image.onload = function() { // the image will take some time to load
    // it's asyncronous 
    // on this function the image will be draw
    drawImage()

}

// 1=> this is function that will draw img 
function drawImage() {
    // - ctx object will be used for draw line etc.
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
   
    // to pass this atribus to text( fullname):
    ctx.font = '30px monotype corsiva';
    ctx.fillStyle = '#29e';
    ctx.fillText(nameInput.value, 40, 120);
}

// 2=> listing the event : input name
nameInput.addEventListener('input', function () {
    drawImage();
});

// 2=> listing the event: Download img
// downloadBtn.addEventListener('click', function () {
//     // updating th src
//     // adding ima link to href - from canvas
//     downloadBtn.href = canvas.toDataURL();
//     downloadBtn.download = true; // make downloadable
// });

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL()
	downloadBtn.download = true
});