function getFormvalue() {
    const fname = document.querySelector('input[name="fname"]').value.trim();
    const lname = document.querySelector('input[name="lname"]').value.trim();

    // Use the string directly, do NOT use .value
    alert(`${fname} ${lname}`);

    // Clear inputs after alert
    document.querySelector('input[name="fname"]').value = '';
    document.querySelector('input[name="lname"]').value = '';
}

document.getElementById("form1").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form submission/reload
    getFormvalue();
});
