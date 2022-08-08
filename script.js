const button = document.getElementById("submit");
const error = document.getElementById("error");

//1. get all form data
const elementInputs = {
    userName: document.getElementById("username").value,
    dob: document.getElementById("userdob").value,
    age: document.getElementById("userage").value,
    contact: document.getElementById("usercontact").value,
    address: document.getElementById("useraddress").value,
    email: document.getElementById("useremail").value,
}

button.addEventListener("click", (event) => {
    event.preventDefault();

    //validation part

    // 2. age should be above 18 and under 40
    if (+elementInputs.age <= 18 || +elementInputs >= 40) {
        console.log("Age is invalid!!")
        return;
    }

    // 3. email is should be contain @ and .com
    if (!elementInputs.email.includes("@") || !elementInputs.email.includes(".com")) {
        console.log("Email is invalid!!")
        return;
    }

    // 4. name should have ony one space and only two words
    const isNameHasTwoWords = elementInputs.userName.split(" ").length;

    if (isNameHasTwoWords > 2 || !elementInputs.userName.includes(" ")) {
        console.log("Username is invalid!!")
        return;
    }

    // 5. date should be not more than 17/08/23
    const date = new Date(2023, 8, 17);
    // date.setFullYear(2023, 8, 17);
    const inputedDate = new Date(elementInputs.dob);
    // inputedDate.setFullYear(2023,9,17);
    if (inputedDate > date) {
        console.log("Date is invalid!!");
        return;
    } else {
        console.log(inputedDate);
    }

    //if all the validations would be passed then execute the below statements
    console.log("All validation is passed.")
    console.log(elementInputs.userName);

})

/**
 * 1. get all form data
 * 2. age should be above 18 and under 40
 * 3. email is should be contain @ and .com
 * 4. name should have ony one space and only two words
 * 5. date should be not more than 17/08/23
 */

