//获取类名的兼容性函数、
//兼容问题：document.getElementsByClassName()  在IE6~~~8不支持
// window.onload=function(){
// function getClass(classname,obj){
// 	obj=obj||document;
// 	if(obj.getElementsByClassName){
// 		return obj.getElementsByClassName(classname);	
// 	}
// 	else{
// 		var arr=[];
// 		var objs=obj.getElementsByTagName('*');
// 		for (var i = 0; i < objs.length; i++) {
// 			if(objs[i].className==classname){
// 				arr.push(objs[i])
// 				}
// 			}	
// 			return arr
// 		}
// 	}
// var parent=document.getElementById('parent')
// var aa=getClass("box",parent)
// alert(aa)
// }





// window.onload=function(){

// 	function getClass(classname,obj){
// 	obj=obj||document;
// 	if(obj.getElementsByClassName){
// 		return obj.getElementsByClassName(classname);	
// 	}
// 	else{
// 		var arr=[];
// 		var objs=obj.getElementsByTagName('*');
// 		for (var i = 0; i < objs.length; i++) {
// 			if(checkClass(objs[i],classname)){
// 				arr.push(objs[i])
// 				}
// 			}	
// 			return arr
// 		}
// 	}
// 	function checkClass(obj,val){
// 		var classStr=obj.className;
// 		var classArr=classStr.split(" ");
// 		for (var i = 0; i < classArr.length; i++) {
// 			if(val==classArr[i]){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// 	var parent=document.getElementById('parent')
// 	var aa=getClass("box",parent)
// 	alert(aa.length)
// }




//1、兼容问题：document.getElementsByClassName()  在IE6~~~8不支持
function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);	
	}
	else{
		var arr=[];
		var objs=obj.getElementsByTagName('*');
		for (var i = 0; i < objs.length; i++) {
			if(checkClass(objs[i],classname)){
				arr.push(objs[i])
				}
			}	
			return arr
		}
	}
	function checkClass(obj,val){
		var classStr=obj.className;
		var classArr=classStr.split(" ");
		for (var i = 0; i < classArr.length; i++) {
			if(val==classArr[i]){
				return true;
			}
		}
		return false;
	}


//正确
// window.onload=function(){

// function getText(parent){
// 	if(parent.textContent){
// 		return parent.textContent 
// 	}else{
// 		return parent.innerText
// 	}
// }
// var parent=document.getElementById('parent')
// var obj=getText(parent)
// alert(obj)
// }



// window.onload=function(){
// function getStyle(classname,arr){
// 	if(getComputedStyle(classname,null)){
// 		return getComputedStyle(classname,null)[arr]
// 	}else{
// 		return classname.currentStyle[arr]
// 	}
// }
// var one=document.getElementById('one')
// var css=getStyle(one,"width")
// alert(css)
// }


//正确获取样式的兼容性
// window.onload=function(){
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}
// var one=document.getElementById('one')
// var css=getStyle(one,"width")
// alert(css)
// }



//设置或者获取文本内容。
// function operateText(parent,val){
// 	if(val!=undefined){
// 		if(parent.textContent){
// 		return parent.textContent=val; 
// 	}else{
// 		return parent.innerText=val;
// 		}
// 	}else{
// 		if(parent.textContent){
// 		return parent.textContent 
// 	}else{
// 		return parent.innerText
// 		}
// 	}
	
// }

// $函数，通过类名、ID、标签名来获取相应的元素节点
//直接将window.onload=function(){}给封装了，以后用的时候直接调用就好
//格式为$(function(){中间写你要的内容})
function $(val,obj){
	if(typeof val=="string"){
			var obj=obj||document;
		// if(val)
		val=val.replace(/^\s*|\s*$/g,"")
		if(val.charAt(0)=="#"){
			return document.getElementById(val.slice(1))
		}else if(val.charAt(0)=="."){
			return getClass(val.slice(1),obj)
		}else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
			return obj.getElementsByTagName(val)
		}
	}else if(typeof val=="function"){
		window.onload=function(){
			val()
		}
	}
	
}


//获取去除空格以外的子节点。
// 1、如果不传type值，默认是"no",意思是指获取的是元素节点
//2、如果传的type值是"yes",意思是获取的是所有孩子节点，除了空格以外。
function getChilds(obj,type){
		var type=type||"no"
		var kids=obj.childNodes;
		var arr=[];
		for (var i = 0; i < kids.length; i++) {
			if(type=="no"){
				if(kids[i].nodeType==1){
					arr.push(kids[i])
				}
			}else if(type=="yes"){
				if(kids[i].nodeType==1||kids[i].nodeType==3&&kids[i].nodeValue.replace(/^\s*|\s*$/g,"")){
					arr.push(kids[i])
				}
			}
		}
		return arr;
	}
	// var sons=getChilds(parent,"yes")




//获取第一个孩子节点的兼容性函数。
function getFirst(obj,type){
		var type=type||"no"
		if(type=="no"){
			return getChilds(obj)[0]
		}else if(type=="yes"){
			return getChilds(obj,"yes")[0]
		}
		return getChilds(obj,type)[0]
	}
	// var first=getFirst(parent,"yes")
	// console.log(first)


function getFirst(obj,type){
		var type=type||"no"
			return getChilds(obj,type)[0]
	}


function getLast(obj,type){
		var type=type||"no"
		var childs=getChilds(obj,type)
			return childs[childs.length-1]
	}



function getN(obj,n,type){
		var type=type||"no"
		var childs=getChilds(obj,type)
			if(n>=childs.length||n<1){
				return false;
			}
			return childs[n-1]
	}


//获取下一个兄弟节点
function getNext(obj,type){
		var type=type||"no";
		var next=obj.nextSibling;
		if(next===null){
			return false;
		}
		if(type=="no"){
			while(next.nodeType==3||next.nodeType==8){
				next=next.nextSibling;
				if(next==null){
					return false;
				}
			}
			return next;
		}else if(type=="yes"){
				while(next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,"")){
				next=next.nextSibling;
				if(next==null){
					return false;
				}
			}
			return next;
		}
	}





//获取前一个兄弟节点。
function getPrevious(obj,type){
		var type=type||"no";
		var previous=obj.previousSibling;
		if(previous===null){
			return false;
		}
		if(type=="no"){
			while(previous.nodeType==3||previous.nodeType==8){
				previous=previous.previousSibling;
				if(previous==null){
					return false;
				}
			}
			return previous;
		}else if(type=="yes"){
				while(previous.nodeType==3&&!previous.nodeValue.replace(/^\s*|\s*$/g,"")){
				previous=previous.previousSibling;
				if(previous==null){
					return false;
				}
			}
			return previous;
		}
	}


// obj要插入的对象obj2插入谁的前面
function insertBefore(obj,obj2){
		var parent=obj2.parentNode;
		return parent.insertBefore(obj,obj2)

	}

function insertAfter(obj,obj2){
		var parent=obj2.parentNode;
		var next=getNext(obj2,"yes");
		if(!next){
			parent.appendChild(obj)
		}else{
			return parent.insertBefore(obj,next)

		}
		
	}