// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const userdob = document.getElementById("userdob");
// const userage = document.getElementById("userage");
// const usercontact = document.getElementById("usercontact");
// const useraddress = document.getElementById("useraddress");
// const userquali = document.getElementById("userquali");
// const useremail = document.getElementById("useremail");
// const userreset = document.getElementById("Reset");
// const usersubmit = document.getElementById("Submit");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validateForm();
// });

// function validateForm() {
//     //get the values from the inputs
//     const usernameValue = username.value.trim();
//     const userdobValue = userdob.value.trim();
//     const userageValue = userage.value.trim();
//     const usercontctValue = usercontact.value.trim();
//     const useraddressValue = useraddress.value.trim();
//     const useremailValue = useremail.value.trim();
//     const userqualiValue = userquali.value.trim();

//     if (usernameValue === '') {
//         //show error
//         //add error class

//         // setErrorFor(username, 'Username cannot be blank');
//
//     }
//     // else {
//     //     //add success class
//     //     setSuccessFor(username);
//     // }
// }
function validateForm(){
const user = document.getElementById('username').value;


if (username == "") {
    document.getElementById('userr').innerHTML = "**Please write username in the Box**";
}
}