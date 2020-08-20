function mouseOver() {
  document.getElementById("a").style.color = "yellow";
}

function mouseOut() {
  document.getElementById("a").style.color = "#00ffff";
}



var s=0;
setInterval(function(){
	if (s==0) {
document.getElementById("home0").src ="home0.jpg";
document.getElementById("home2").src ="home2.jpg";
document.getElementById("home3").src ="home3.jpg";
document.getElementById("home4").src="home4.jpg";
document.getElementById("home6").src="home6.jpg";
document.getElementById("home7").src="home7.jpg";
document.getElementById("home8").src="home8.jpg";
document.getElementById("home11").src="home11.jpg";   }
else if (s==1) {
document.getElementById("home0").src ="home2.jpg";
document.getElementById("home2").src ="home3.jpg";
document.getElementById("home3").src ="home4.jpg";
document.getElementById("home4").src="home5.jpg";
document.getElementById("home6").src="home7.jpg";
document.getElementById("home7").src="home8.jpg";
document.getElementById("home8").src="home9.jpg";
document.getElementById("home11").src="home0.jpg";    }
else if(s==2){
document.getElementById("home0").src ="home3.jpg";
document.getElementById("home2").src ="home4.jpg";
document.getElementById("home3").src ="home5.jpg";
document.getElementById("home4").src="home6.jpg";
document.getElementById("home6").src="home8.jpg";
document.getElementById("home7").src="home9.jpg"; 
document.getElementById("home8").src="home11.jpg";
document.getElementById("home11").src="home2.jpg";   }
else if (s==3){
document.getElementById("home0").src ="home4.jpg";
document.getElementById("home2").src ="home5.jpg";
document.getElementById("home3").src ="home6.jpg";
document.getElementById("home4").src="home7.jpg";
document.getElementById("home6").src="home9.jpg";
document.getElementById("home7").src="home11.jpg"; 
document.getElementById("home8").src="home0.jpg";
document.getElementById("home11").src="home3.jpg";   }
else if (s==4){
document.getElementById("home0").src ="home5.jpg";
document.getElementById("home2").src ="home6.jpg";
document.getElementById("home3").src ="home7.jpg";
document.getElementById("home4").src="home8.jpg";
document.getElementById("home6").src="home11.jpg";
document.getElementById("home7").src="home0.jpg";
document.getElementById("home8").src="home2.jpg";
document.getElementById("home11").src="home4.jpg";    }
else if (s==5){
document.getElementById("home0").src ="home6.jpg";
document.getElementById("home2").src ="home7.jpg";
document.getElementById("home3").src="home8.jpg";
document.getElementById("home4").src="home9.jpg";
document.getElementById("home6").src="home0.jpg";
document.getElementById("home7").src="home2.jpg"; 
document.getElementById("home8").src="home3.jpg";
document.getElementById("home11").src="home5.jpg";   }
else if (s==6){
document.getElementById("home0").src ="home7.jpg";
document.getElementById("home2").src="home8.jpg";
document.getElementById("home3").src="home9.jpg";
document.getElementById("home4").src="home11.jpg";
document.getElementById("home6").src="home2.jpg";
document.getElementById("home7").src="home3.jpg";
document.getElementById("home8").src="home4.jpg";
document.getElementById("home11").src="home6.jpg";   }
else if (s==7){
document.getElementById("home0").src="home8.jpg";
document.getElementById("home2").src="home9.jpg";
document.getElementById("home3").src="home11.jpg";
document.getElementById("home4").src="home0.jpg";
document.getElementById("home6").src="home3.jpg";
document.getElementById("home7").src="home4.jpg";
document.getElementById("home8").src="home5.jpg";
document.getElementById("home11").src="home7.jpg";   }
else if (s==8){
document.getElementById("home0").src="home9.jpg";
document.getElementById("home2").src="home11.jpg";
document.getElementById("home3").src="home0.jpg";
document.getElementById("home4").src="home2.jpg";
document.getElementById("home6").src="home4.jpg";
document.getElementById("home7").src="home5.jpg";
document.getElementById("home8").src="home6.jpg";
document.getElementById("home11").src="home8.jpg";
}
else if (s==9){
document.getElementById("home0").src="home2.jpg";
document.getElementById("home2").src="home4.jpg";
document.getElementById("home3").src="home6.jpg";
document.getElementById("home4").src="home8.jpg";
document.getElementById("home6").src="home9.jpg";
document.getElementById("home7").src="home5.jpg";
document.getElementById("home8").src="home3.jpg";
document.getElementById("home11").src="home7.jpg";
}
else if (s==11){
document.getElementById("home0").src="home4.jpg";
document.getElementById("home2").src="home3.jpg";
document.getElementById("home3").src="home11.jpg";
document.getElementById("home4").src="home9.jpg";
document.getElementById("home6").src="home7.jpg";
document.getElementById("home7").src="home5.jpg";
document.getElementById("home8").src="home6.jpg";
document.getElementById("home11").src="home0.jpg";
}

s++;
if (s==10){
	s=0;
}

},900);

var x = document.getElementById("tizer");
if (x.addEventListener) {
  x.addEventListener("click", myFunction);
} else if (x.attachEvent) {
  x.attachEvent("onclick", myFunction);
}

function myFunction() {
  alert("Congratulations you won a voucher that gives you 50% off the first purchase to redeem the benefit and send us a screenshot");
}

var headerjst=document.getElementById("header");
var descriptionjs=document.getElementById("page1");
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
	div.style.left="50px";
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



