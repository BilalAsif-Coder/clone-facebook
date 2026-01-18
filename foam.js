let firstName = document.getElementById("Firstname")
let lastName = document.getElementById("lastname")
let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let gender = document.getElementsByName("gender")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signUpBtn = document.getElementById("signupBtn")

let users = []




const signupHandler = () => {

    if (firstName.value.trim() === "" || lastName.value.trim() === ""  || day.value.trim() === "" || month.value.trim() === "" || year.value.trim() )  {

    }

    
let usersData = {
    firstName: firstName.value,
    lastName: lastName.value,
    day: day.value,
    month: month.value,
    year: year.value,
    email: email.value,
    password: password.value,
      


};



for (let i = 0 ; i < gender.length ; i++) {
    if(gender[i].checked){
        usersData.gender = gender[i].value

    }

}

  users.push(usersData);
  localStorage.setItem("users", JSON.stringify(users));
}



signUpBtn.addEventListener("click" , signupHandler)
















