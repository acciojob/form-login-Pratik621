const submit=document.querySelector("input[type=submit]");


function getFormvalue() {
    //Write your code here
	const fname=document.querySelector("input[name=fname]")
    const lname=document.querySelector("input[name=lname]")
	 alert(`${fname.value} ${lname.value}`)
	fname.value='';
	lname.value="";


}
document.getElementById("form1").addEventListener("submit",function(e)=>{
	e.prevetDefault();
	getFormvalue()
	
})






