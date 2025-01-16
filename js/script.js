/*Ini File Java Script*/


function validateForm() {
    const nama = document.forms ['messege-form']['name-input'].value;

    if(nama==""){
        document.getElementById("error-name").innerHTML="Nama tidak  boleh kosong"

        return false
     }

     setName (nama)

     return false;
    }


   