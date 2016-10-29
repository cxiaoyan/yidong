//大banner的动效
window.onload=function(){
	var bncenter=$(".bncenter")[0]
	var imgs=$(".banner-pos")
	var btn=$(".btn")
	var left=$(".blf")[0]
	var right=$(".brg")[0]
	var n=0;
	var next=0;
	var width=parseInt(getStyle(bncenter,"width"))
	var t=setInterval(move,2000)
	function move(){
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		imgs[next].style.left=width+"px";
		animate(imgs[n],{left:-width},600)
		animate(imgs[next],{left:0},600)
		btn[n].style.background="#ccc"
		btn[next].style.background="red"
		n=next;
	}

	bncenter.onmouseover=function(){
		clearInterval(t)
	}
	bncenter.onmouseout=function(){
		t=setInterval(move,2000)
	}
	

	left.onclick=function(){
		move();
	}
	right.onclick=function(){
		next=n-1;
		if(next<0){
			next=imgs.length-1
		}
		imgs[next].style.left=-width+"px"
		animate(imgs[n],{left:width},600)
		animate(imgs[next],{left:0},600)
		btn[n].style.background="#ccc"
		btn[next].style.background="red"
		n=next
	}

	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i;
		btn[i].onclick=function(){
			if(this.index>n){
				imgs[this.index].style.left=width+"px"
				animate(imgs[n],{left:-width},600)
				animate(imgs[this.index],{left:0},600)
			}else if(this.index<n){
				imgs[this.index].style.left=-width+"px"
				animate(imgs[n],{left:width},600)
				animate(imgs[this.index],{left:0},600)
			}
			btn[n].style.background="#ccc"
			btn[this.index].style.background="red"
			n=this.index
		}
	}
	


	//banner下面的移动的菜单
	var lunbo=$(".caidan")[0]
	var leftbutton=$("#lunbo-left")
	var rightbutton=$("#lunbo-right")
	var imgBox=$("#img-box")
	var swidth=parseInt(getStyle($(".sibox")[0],"width"));
	var tttt=setInterval(moveNode,2000)
	function moveNode(){
		animate(imgBox,{left:-(swidth+10)},800,function(){
			var imgfirst=getFirst(imgBox);
			imgBox.appendChild(imgfirst)
			imgBox.style.left=0;
		})
	}
	lunbo.onmouseover=function(){
		clearInterval(tttt);
	}
	lunbo.onmouseout=function(){
		tttt=setInterval(moveNode,2000)
	}
	leftbutton.onclick=function(){
		var last=getLast(imgBox)
		var first=getFirst(imgBox)
		insertBefore(last,first)
		imgBox.style.left=-(swidth+10)+"px"
		animate(imgBox,{left:0},600)
	}
	rightbutton.onclick=function(){
		moveNode()
	}






	// nav的下拉菜单选项
	//nav移动上去时变浅灰，移出变回之间的深灰
	var lis=$(".lis")
	var navw=$(".navw")
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=0;
		lis[i].onmouseover=function(){
			this.style.background="#f3f3f3"
			var navw=$(".navw",this)[0]
			navw.style.color="#0085d0"
			var hidden=$(".hidden",this)[0]
			var clis=$(".clis",hidden)[0]
			var h=parseInt(getStyle(clis,"height"))
			animate(hidden,{height:h},0)
		}
		lis[i].onmouseout=function(){
			this.style.background="#e4e4e4"
			var navw=$(".navw",this)[0]
			navw.style.color=""
			var hidden=$(".hidden",this)[0]
			animate(hidden,{height:0},0)
		}
	}



	//二维码的隐藏与显示：
	var box=$(".f")
	for (var i = 0; i < 2; i++) {
		box[i].onmouseover=function(){
			this.style.background="#fff"
			var ewm=$(".erms",this)[0]
			// console.dir(ewm)
			ewm.style.display="block"
		}
		box[i].onmouseout=function(){
			this.style.background=""
			var ewm=$(".erms",this)[0]
			ewm.style.display="none"
		}
	}




	var taiyuan=$(".taiyuan")[0]
	var body=$("body")[0]
	taiyuan.onclick=function(e){
		var e=e||window.event;
		if(e.cancelBubble){
			e.cancelBubble=true;
		}else{
			e.stopPropagation()
		}
		var weituo=$(".weituo")[0]
		weituo.style.display="block"
	}
		
	body.onclick=function(e){
		var e=e||window.event;
		var obj=e.target||e.srcElement;
		if(obj.className!="taiyuan"){
			var weituo=$(".weituo")[0]
			weituo.style.display="none"
		}
	}


	var z=$(".zkh")[0]
	var y=$(".ykh")[0]
	var big=$(".ad")[0]
	var fubox=$(".add-box-word")
	var wword=fubox[0].offsetWidth;
	var nn=0;
	var nt=0;
	var st=setInterval(w,4000)
	function w(){
		nt=nn+1;
		if(nt>fubox.length-1){
			nt=0
		}
		fubox[nt].style.left=wword+"px"
		animate(fubox[nn],{left:-wword},0)
		animate(fubox[nt],{left:0},0)
		nn=nt;
	}
	big.onmouseover=function(){
		clearInterval(st)
	}
	big.onmouseout=function(){
		st=setInterval(w,4000)
	}
	y.onclick=function(){
		w();
	}
	z.onclick=function(){
		nt=nn-1;
		if(nt<0){
			nt=fubox.length-1
		}
		fubox[nt].style.left=-wword+"px"
		animate(fubox[nn],{left:wword},0)
		animate(fubox[nt],{left:0},0)
		nn=nt;
	}


	var hover=$(".dibuf")
	for (var i = 0; i < hover.length; i++) {
		hover[i].onmouseover=function(){
			var phone=$(".phone1",this)[0]
			animate(phone,{right:45},200)
		}
		hover[i].onmouseout=function(){
			var phone=$(".phone1",this)[0]
			animate(phone,{right:15},200)
		}
	};


	var hmove=$(".btrgbox")
	for (var i = 0; i < hmove.length; i++) {
		hmove[i].onmouseover=function(){
			var phone=$("img",this)[0]
			animate(phone,{right:45},200)
		}
		hmove[i].onmouseout=function(){
			var phone=$("img",this)[0]
			animate(phone,{right:15},200)
		}
	};


	
}



