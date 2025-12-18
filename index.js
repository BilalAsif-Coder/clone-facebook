let emailInput = document.getElementById("main-email")
let passwordInput = document.getElementById("main-password")

function dataHandle() {
    console.log("User Email is ---> ", emailInput.value)
    console.log("User Pssseord is ---> ", passwordInput.value)
}


function spaceFunction() {

    if (emailInput.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    else if (passwordInput.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }

    // else if (emailInput.value == "@") {
    //     window.location.href = "dash.html"

    // }




    for (let i = 0; i < emailInput.value.length; i++) {
        if (emailInput.value[i] == "@") {

            Swal.fire({
                title: "Done !!",
                icon: "success",
                draggable: true


            });

            if (emailInput.value[i] == ".") {
                Swal.fire({
                    title: "Done !!",
                    icon: "success",
                    draggable: true


                });
            }






            window.location.href = "http://127.0.0.1:5500/dash.html"

        }





        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

        }

    }









}








//   window.location.href = "" ; 




