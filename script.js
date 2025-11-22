// const submit=document.querySelector("input[type=submit]").click()
function getFormvalue(){
	const john=document.querySelector(".fname").type("John")
	const doe=document.querySelector(".lname").type("Doe")

	return alert(john+" "+doe)
}