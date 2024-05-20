function validate(form) {
    fail = validateForename(form.forename.value)
    fail += validateSurname(form.surname.value)
    fail += validateUsername(form.username.value)
    fail += validatePassword(form.pwd.value)
    fail += validateAge(form.age.value)
    fail += validateEmail(form.mail.value)

    if (fail == "") return true
    else { alert(fail); return false }


}


function validateForename(field) {
    if (field === "") return "No forename was entered.\n";
    else return "";
}

function validateSurname(field) {
    return (field === "") ? "No surname was entered.\n" : "";
}

function validateUsername(field) {
    if (field === "") { return "No username was entered, please enter it.\n"; }
    else if (field.length < 8) { return "Username must be atleast 8 characters.\n"; }
    else if (/[^a-zA-Z0-9\-_]/.test(field)) { return "Only a-z, A-Z, 0-9, - and _ allowed in Usernames.\n"; }  //"any character except the ones listed"
    else { return ""; }
}


function validatePassword(field) {
    if (field === "") return "No password is entered , please enter.\n";
    else if (field.length < 8) return "Weak Password!,Password must be atleast 8 characters.\n";
    else if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) || !/[0-9]/.test(field)) return "Passwords require one each of a-z, A-Z and 0-9.\n";
    else return "";
}

function validateAge(field) {
    if (field === "") return "No age is entered.\n";
    else if (field < 14 || field > 110) return "Age must be between 14 and 110.\n";
    else return "";
}


function validateEmail(field) {
    if (field === "") return "No Email was entered.\n";
    else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(field)) return "The Email address is invalid.\n";
    else return "";
}
