var nameError = document.getElementById('name-error')
var nameError = document.getElementById('email-error')
var nameError = document.getElementById('subject-error')

function validateName(){

    var name = document.getElementById('contact-name')

        if (name.length == 0){
                nameError.innerHTML = 'name is requered'
                return false;
        }
        name.innerHTML = 'valid';
        return true ;
       
}