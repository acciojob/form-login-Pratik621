const submit=document.querySelector("button");
function getFormvalue() {
    //Write your code here
	 alert(`${fname.value} ${lname.value}`)


}
submit.addEventListener("click",()=>{
    const fname=document.querySelector("input[type=fname]")
const lname=document.querySelector("input[type=lname]")
    getFormvalue(fname,lname);
})
