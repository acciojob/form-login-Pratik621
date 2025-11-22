
const submit=document.querySelector("input[type=submit]")

submit.addEventListener("click",()=>{
	   getFormvalue()
})
function getFormvalue() {
	const fname=document.querySelector(".fname")
const lname=document.querySelector(".lname")
	return alert(`${fname.value} ${lname.value}`)
	
	
}