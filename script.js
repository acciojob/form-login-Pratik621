const submit=document.querySelector("input[type=submit]")
function getFormvalue(){
	const john=document.querySelector(".fname").value
	const doe=document.querySelector(".lname").value

	return alert(john+" "+doe)
}