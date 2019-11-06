function changeImg() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/ik.jpg")) {
        image.src = "images/ik2.jpg";
    } else {
        image.src = "images/ik.jpg";
    }
}

var clicks = 14;

document.getElementById("clicks").innerHTML = clicks;

$('.like-counter').click(function () {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    $('.like-counter').addClass("liked");
});