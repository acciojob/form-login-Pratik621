function showAlert() {
  const fname = document.querySelector('input[name="fname"]').value;
  const lname = document.querySelector('input[name="lname"]').value;

  alert(fname + " " + lname);
}
const submit("onclick",showAlert())