// closes menu after clicking any link in it
(function() {
	let butt = document.getElementsByClassName("SideBurgerIcon")[0];
	let elems = document.getElementsByClassName("SidebarItemRow");
	for (let i = 0; i < elems.length; i++) {
		elems[i].onclick = function(){
			butt.click();
		}
	}
})();
