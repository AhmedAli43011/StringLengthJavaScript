function stringlength(inputtxt, minlength, maxlength, number) {
    var field = inputtxt.value;
    var mnlen = minlength;
    var mxlen = maxlength;
    var num = number;
    if (field.length < mnlen || field.length > mxlen ) {
        alert("Please input the userid between " + mnlen + " and " + mxlen + " characters");
        return false;
    }
    // else if(field.length !== num){
    //     alert("Please enter string"+num+ "not number");
    //     return false;
    // }
    else {
        alert('Your userid have accepted.');
        return true;
    }
}
