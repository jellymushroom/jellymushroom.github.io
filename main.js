function validateForm() {
    var fnameFilled = document.forms["buyForm"]["fname"].value;
    var lnameFilled = document.forms["buyForm"]["lname"].value;
    var emailFilled = document.forms["buyForm"]["email"].value;
    var qtFilled = document.forms["buyForm"]["qt"].value;
    var addressFilled = document.forms["buyForm"]["address"].value;
    var ccFilled = document.forms["buyForm"]["cc"].value;
    if (fnameFilled == null || fnameFilled == ""
    	|| lnameFilled == null || lnameFilled == ""
    	|| emailFilled == null || emailFilled == ""
    	|| qtFilled == null || qtFilled == ""
    	|| addressFilled == null || addressFilled == ""
    	|| ccFilled == null || ccFilled == "") {
        alert("You did not complete the form!");
        return false;
    }
}