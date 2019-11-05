function changeImg() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/ik.jpg")) {
        image.src = "images/ik2.jpg";
    }
    else {
        image.src = "images/ik.jpg";
    }
}