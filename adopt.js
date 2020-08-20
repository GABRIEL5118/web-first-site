function mouseOver() {
  document.getElementById("b").style.color = "yellow";
}

function mouseOut() {
  document.getElementById("b").style.color = "#00ffff";
}


var headerjst=document.getElementById("header");
var descriptionjs=document.getElementById("a0");
var booleanB=true;

descriptionjs.addEventListener("mouseover",function(){
	if(booleanB==true){
	var div=document.createElement("div");
	var list2=document.createElement("ul");
	var li1=document.createElement("li");
	var li2=document.createElement("li");
	var li3=document.createElement("li");
	var a1=document.createElement("a");
	var a2=document.createElement("a");
	var a3=document.createElement("a");
		a1.innerHTML="facebook";
		a2.innerHTML="instagram";
		a3.innerHTML="mail";
		a1.href="https://www.facebook.com/";
		a2.href="https://www.instagram.com/";
		a3.href="https://mail.google.com";
		a1.style.textDecoration="none";
		a2.style.textDecoration="none";
		a3.style.textDecoration="none";
		a1.style.marginLeft="20px";
		a2.style.marginLeft="20px";
		a3.style.marginLeft="20px";
		li1.style.backgroundColor="#3399ff";
		li2.style.backgroundColor="#1a75ff";
		li3.style.backgroundColor="#ccffff";
		li1.style.display="block";
		li1.style.width="150px";
		li1.style.height="50px";
		li2.style.display="block";
		li2.style.width="150px";
		li2.style.height="50px";
		li3.style.display="relative";
		li3.style.width="150px";
		li3.style.height="50px";
	li1.appendChild(a1);
	li2.appendChild(a2);
	li3.appendChild(a3);
	list2.appendChild(li1);
	list2.appendChild(li2);
	list2.appendChild(li3);
	list2.style.listStyleType="none";
	div.style.position="relative";
	div.style.left="10px";
	div.style.top="-10px";
	div.appendChild(list2);
	headerjst.appendChild(div);
	booleanB=false;
	li3.addEventListener("mouseout",function(){
		div.style.display="none";
		booleanB=true;

	});

}
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}