function test(){
	var a = document.getElementsByClassName("class1");
	var b;
	var c = ["red","blue","yellow","green","purple","black","white","orange","brown","gray"]
	for(b in a){
		a[b].style.color = c[Math.round(Math.random()*10)];
}
}