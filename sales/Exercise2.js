
window.onload = initImages;


function initImages()

{
	for (var i=0; i<document.images.length; i++)
	{
		document.images[i].onclick = newWindow;
	}
}

function newWindow()
{
	
	var imgName = "images/" + this.id + ".html";
	var imgWindow = window.open(imgName,"imgWin", "width=700,height=400,scrollbars=no");
	
}