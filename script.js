//your JS code here. If required.  
let cookies = document.cookie.split("; ").map((ele) => {
      let [key, ...value] = ele.split("=");
      return [key, value.join("=")];
    });
let checkFontSize = cookies.find((ele)=>ele[0]=="fontsize")
let checkFontColor=cookies.find((ele)=>ele[0]=="fontcolor")

if(checkFontColor && checkFontSize){
	setAcc(checkFontSize[1],checkFontColor[1])
}
function savePreferences(event){
	event.preventDefault()
	let fontsize =document.getElementById("fontsize").value
	let fontcolor = document.getElementById("fontcolor").value
	document.cookie=`fontsize=${fontsize}`
	document.cookie = `fontcolor=${fontcolor}`
	setAcc(fontsize,fontcolor)
}
function setAcc(size,color){
	console.log(size)
	document.getElementById("fontsize").value = size
	document.getElementById("fontcolor").value= color
	document.documentElement.style.setProperty('--fontsize',size);
    document.documentElement.style.setProperty('--fontcolor',color);
	
}