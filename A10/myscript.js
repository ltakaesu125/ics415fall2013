function getClass(elem) {
	//get list of all tags with name elem
    var element = document.getElementsByTagName(elem);
    //create new array to hold results
    var result = new Array();
    var index = 0;
    //loop through all tags with value elem
    for (var i = 0; i < element.length; i++) {
        var currentNode = element[i];
        //check if tag has attributes
        if (currentNode.attributes.length > 0) {
            var attrib = currentNode.attributes;
            //loop through attributes to find class attribute
            for (var k = 0; k < attrib.length; k++) {
                if (attrib[k].name == "class") {
                	//split class names by space characters
                	var values = attrib[k].value.split(" ");
                	//append values to result array
                	for(var x = 0; x < values.length; x++){
                		result[index++] = values[x];
                	}
                }
            }
        }
    }

    return result;
}

function addClass(elem, className) {
    //get list of all tags containing elem
    var list = document.getElementsByTagName(elem);

    //loop through all tags with value
    for (var i = 0; i < list.length; i++) {
        var current = list[i];

        //if element has a class attribute, append new value
        if (current.getAttribute("class")) {
            current.setAttribute("class", current.getAttribute("class") + " " + className);
        }
        //else add class attribute and 
        else {
            current.setAttribute("class", className);
        }
    }
}

function validateForm(){
	//boolean for final result
	var result = true;
	
	//array to store fields with errors
	var errorList = new Array();
	var index = 0;
	
	//handles to the input fields on the page
	var user = document.forms["myForm"]["name"];
	var email = document.forms["myForm"]["email"];
	var pass = document.forms["myForm"]["password"];
	var pass2 = document.forms["myForm"]["confirm"];
	
	//check if all fields have input
    if(user.value == null || user.value == ""){
        user.setAttribute("style", "border-color: red;");
        errorList[index++] = "User name";
        result = false;
    }
    
    if(email.value == null || email.value ==""){
    	email.setAttribute("style", "border-color: red;");
    	errorList[index++] = "E-mail";
    	result = false;
    }
	
    if(pass.value == null || pass.value ==""){
    	pass.setAttribute("style", "border-color: red;");
    	errorList[index++] = "Password";
    	result = false;
    }
    
    if(pass2.value == null || pass2.value ==""){
    	pass2.setAttribute("style", "border-color: red;");
    	errorList[index++] = "Confirm password";
    	result = false;
    }
    
    //Only modify HTML on page if error is present
    if(!result){
    	var errorMessage = "";
        for(var i = 0; i < errorList.length; i++){
        	if(i == 0){
        		errorMessage = errorList[i] + ", ";
        	}
        	else if(i == (errorList.length - 2)){
        		errorMessage = errorMessage + errorList[i] + ", and ";
        	}
        	else if(i == (errorList.length -1 )){
        		errorMessage = errorMessage + errorList[i];
        	}
        	else {
        		errorMessage = errorMessage + errorList[i] + ", ";
        	}
        }
        
        //create error message for fields left blank
        var newP = document.createElement("p");
        var newMessage = document.createTextNode(errorMessage + " field(s) are blank");
        newP.appendChild(newMessage);
        newP.setAttribute("style", "color:red");
        var forms = document.forms["myForm"];
        forms.parentNode.insertBefore(newP, forms);
    }
    
    //check if passwords match
    if(pass.value != pass2.value){
    	pass.setAttribute("style", "border-color: red;");
    	pass2.setAttribute("style", "border-color: red;");
    	//create error message for fields left blank
        var newP = document.createElement("p");
        var newMessage = document.createTextNode("Passwords do not match");
        newP.appendChild(newMessage);
        newP.setAttribute("style", "color:red");
        var forms = document.forms["myForm"];
        forms.parentNode.insertBefore(newP, forms);
    }
    
    
	return result;
}