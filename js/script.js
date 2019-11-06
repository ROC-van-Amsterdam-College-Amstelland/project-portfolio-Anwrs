function changeImg() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/ik.jpg")) {
        image.src = "images/ik3.jpg";
    } else {
        image.src = "images/ik.jpg";
    }
}

var likes=0, dislikes=0;

function like(){
	likes++;
	calculateBar();
}
function dislike(){
	dislikes++;
	calculateBar();
}

function calculateBar(){
	var total= likes+dislikes;
	var percentageLikes=(likes/total)*100;
	var percentageDislikes=(dislikes/total)*100;

	document.getElementById('likes').style.width=percentageLikes.toString()+"%";
	document.getElementById('dislikes').style.width=percentageDislikes.toString()+"%";
    
    document.getElementById('likeButton').value="Like ("+likes.toString()+")";
    document.getElementById('dislikeButton').value="Disike ("+dislikes.toString()+")";

}



datum= new Date()
    document.getElementById("vandaag").innerHTML = datum.getDate() + "-" + (datum.getMonth()+1)
    + "-" + datum.getFullYear();

