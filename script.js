function getFormvalue() {
    const fname = document.querySelector('input[name="fname"]').value.trim();
    const lname = document.querySelector('input[name="lname"]').value.trim();

   
    alert(`${fname} ${lname}`);

   
    document.querySelector('input[name="fname"]').value = '';
    document.querySelector('input[name="lname"]').value = '';
}

document.getElementById("form1").addEventListener("submit", function(e) {
    e.preventDefault();
    getFormvalue();
});
