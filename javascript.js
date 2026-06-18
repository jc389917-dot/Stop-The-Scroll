// Wait for the page to load 
window.addEventListener("DOMContentLoaded", function () {

    // Get the image
    const image = document.getElementById("mainImage");

    // Make sure the image exists
    if (!image) {
        console.error("Could not find image with id='mainImage'");
        return;
    }

    // Keep track of which image is showing
    let lightOn = true;

    // Change the image when it is clicked
    image.addEventListener("click", function () {

        // Switch between the two images
        if (lightOn) {
            image.src = "phone2.png";
            lightOn = false;
        } else {
            image.src = "phone1.png";
            lightOn = true;
        }

    });

});