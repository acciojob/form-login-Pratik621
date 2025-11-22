const submit=document.querySelector("input[type=submit]");
function getFormvalue(fname,lname) {
    //Write your code here
	 alert(`${fname.value} ${lname.value}`)
	fname.value='';
	lname.value="";


}
submit.addEventListener("click",()=>{
    const fname=document.querySelector("input[name=fname]")
const lname=document.querySelector("input[name=lname]")
    getFormvalue(fname,lname);
})
