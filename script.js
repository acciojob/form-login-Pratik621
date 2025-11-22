
const submit=document.querSelector("input[type=submit]")

submit.addEventListener("click",()=>{
	   getFormvalue()
})
function getFormvalue() {
	const fname=document.querySelctor(".fname")
const lname=document.querySelctor(".lname")
	return alert(`${fname.value} ${lname.value}`)
	
	
}