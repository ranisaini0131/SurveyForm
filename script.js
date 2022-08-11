// const button = document.getElementById("submit");
const error = document.getElementById("error");
const message = document.getElementById("msg");
const form = document.getElementById("form");

//1. get all form data

form.addEventListener("submit", (event) => {
    event.preventDefault();


    const userName = event.target.name.value;
    const userDob = event.target.dob.value;
    const userGender = event.target.gender.value;
    const userAge = event.target.age.value;
    const userContact = event.target.contact.value;
    const userQualification = event.target.qualification.value;
    const userEmail = event.target.email.value;

    //validation part
    // 1. name should have ony one space and only two words
    const isNameHasTwoWords = userName.split(" ").length;

    if (isNameHasTwoWords > 2 || !userName.includes(" ")) {
        console.log("Name is invalid!!");
        return;
    }

    // 2. date should be not more than 17/08/23
    const date = new Date(2023, 8, 17);
    // date.setFullYear(2023, 8, 17);
    const inputedDate = new Date(userDob);
    // inputedDate.setFullYear(2023,9,17);
    if (inputedDate > date) {
        console.log("Date is invalid!!");
        return;
    } else {
        console.log(inputedDate);
    }
    // 4. age should be above 18 and under 40
    if (+userAge <= 18 || +userAge >= 40) {
        console.log("Age is invalid!!")
        return;
    }

    // 7. email is should be contain @ and .com
    if (!userEmail.includes("@") || !userEmail.includes(".com")) {
        console.log("Email is invalid!!");
        return;
    }



    //if all the validations would be passed then execute the below statements
    console.log("All validation is passed.");
    if(true){
    error.textContent = "Please Fill All Required Fields";
    } else{
    message.textContent = "Form Submitted";
    }
})

/**
 * 1. get all form data
 * 2. age should be above 18 and under 40
 * 3. email is should be contain @ and .com
 * 4. name should have ony one space and only two words
 * 5. date should be not more than 17/08/23
 */

