// JavaScript Document

// JavaScript Document

//Assignment 3 - Survey Process Form Javascript

// var firstName 	= 	document.survey.firstname.value;
	// var lastName 	= 	document.survey.lastname.value;
	// var phoneNum 	= 	document.survey.phone.value;
	// var emailAdd 	= 	document.survey.email.value;
	// var sulleyAdd 	= 	document.survey.sulley.value;

	function hintHint(formInput) {
		switch (formInput)
		{
			case firstname:
				var firstNameHint = document.getElementById("firstnamehint");
				var hintParagraph = document.createElement('span');
				hintParagraph.setAttribute('id','hint_text');
				var hintText = document.createTextNode("Enter your first name.");
				hintParagraph.appendChild(hintText);
				firstNameHint.appendChild(hintParagraph);
				break;
			case lastname:
				var lastNameHint = document.getElementById("lastnamehint");
				var hintParagraph = document.createElement('span');
				hintParagraph.setAttribute('id','hint_text');
				var hintText = document.createTextNode("Enter your last name.");
				hintParagraph.appendChild(hintText);
				lastNameHint.appendChild(hintParagraph);
				break;
			case phone:
				var phoneHint = document.getElementById("phonehint");
				var hintParagraph = document.createElement('span');
				hintParagraph.setAttribute('id','hint_text');
				var hintText = document.createTextNode("Enter phone number (xxx)xxx-xxxx.");
				hintParagraph.appendChild(hintText);
				phoneHint.appendChild(hintParagraph);
				break;
			case email:
				var emailHint = document.getElementById("emailhint");
				var hintParagraph = document.createElement('span');
				hintParagraph.setAttribute('id','hint_text');
				var hintText = document.createTextNode("Enter your email address.");
				hintParagraph.appendChild(hintText);
				emailHint.appendChild(hintParagraph);
				break;
			case sulley:
				var sulleyHint = document.getElementById("sulleyhint");
				var hintParagraph = document.createElement('span');
				hintParagraph.setAttribute('id','hint_text');
				var hintText = document.createTextNode("Enter your sulley address (including http://).");
				hintParagraph.appendChild(hintText);
				sulleyHint.appendChild(hintParagraph);
				break;
		}


	}

	function unFocus(formInput) {
		
		switch(formInput)
		{
			case firstname:
				var firstName 	= 	document.survey.firstname.value;
				if (firstName == "")
				{
					var firstNameHint = document.getElementById("firstnamehint");
					var hintText = document.getElementById("hint_text");
					firstNameHint.removeChild(hintText);					
				}
				else
					validateData(firstname, firstName);
				break;
			case lastname:
				var lastName 	= 	document.survey.lastname.value;
				if (lastName == "")
				{
					var lastNameHint = document.getElementById("lastnamehint");
					var hintText = document.getElementById("hint_text");
					lastNameHint.removeChild(hintText);					
				}
				else
					validateData(lastname, lastName);
				break;
			case phone:
				var phoneNum 	= 	document.survey.phone.value;
				if (phoneNum == "")
				{
					var phoneHint = document.getElementById("phonehint");
					var hintText = document.getElementById("hint_text");
					phoneHint.removeChild(hintText);					
				}
				else
					validateData(phone, phoneNum);
				break;
			case email:
				var emailAdd 	= 	document.survey.email.value;
				if (emailAdd == "")
				{
					var emailHint = document.getElementById("emailhint");
					var hintText = document.getElementById("hint_text");
					emailHint.removeChild(hintText);					
				}
				else
					validateData(email, emailAdd);
				break;
			case sulley:
			var sulleyAdd 	= 	document.survey.sulley.value;
				if (sulleyAdd == "")
				{
					var sulleyHint = document.getElementById("sulleyhint");
					var hintText = document.getElementById("hint_text");
					sulleyHint.removeChild(hintText);	
				}
				else
					validateData(sulley, sulleyAdd);
				break;
		}
	}
	
	function validateData(formInput,inputString) {
		
		switch(formInput)
		{
			case firstname:
				if (inputString.match(/^[A-Za-z]+$/))
				{
					//console.log("First Name: valid input");
					var firstNameHint = document.getElementById("firstnamehint");
					// var hintText = document.getElementById("hint_text");
					// firstNameHint.removeChild(hintText);
					while(firstNameHint.hasChildNodes()) {
						firstNameHint.removeChild(firstNameHint.lastChild);
					}

					var firstNameHint = document.getElementById("firstnamehint");
					var successImg = document.createElement('img');
					successImg.setAttribute('src','success.png');
					firstNameHint.appendChild(successImg);

				}
				else
				{
					//console.log("First Name: invalid input");
					var firstNameHint = document.getElementById("firstnamehint");
					// var hintText = document.getElementById("hint_text");
					// firstNameHint.removeChild(hintText);
					while(firstNameHint.hasChildNodes()) {
						firstNameHint.removeChild(firstNameHint.lastChild);
					}

					var firstNameHint = document.getElementById("firstnamehint");
					var errorImg = document.createElement('img');
					errorImg.setAttribute('src','error.png');
					firstNameHint.appendChild(errorImg);
				}
				break;
			case lastname:
				if (inputString.match(/^[A-Za-z]+$/))
				{
					var lastNameHint = document.getElementById("lastnamehint");
					// var hintText = document.getElementById("hint_text");
					// lastNameHint.removeChild(hintText);
					while(lastNameHint.hasChildNodes()) {
						lastNameHint.removeChild(lastNameHint.lastChild);
					}

					var lastNameHint = document.getElementById("lastnamehint");
					var successImg = document.createElement('img');
					successImg.setAttribute('src','success.png');
					lastNameHint.appendChild(successImg);
				}
				else
				{
					var lastNameHint = document.getElementById("lastnamehint");
					// var hintText = document.getElementById("hint_text");
					// lastNameHint.removeChild(hintText);
					while(lastNameHint.hasChildNodes()) {
						lastNameHint.removeChild(lastNameHint.lastChild);
					}

					var lastNameHint = document.getElementById("lastnamehint");
					var errorImg = document.createElement('img');
					errorImg.setAttribute('src','error.png');
					lastNameHint.appendChild(errorImg);
				}
				break;
			case phone:
				if (inputString.match(/^\(\d{3}\)\d{3}-\d{4}$/))
				{
					var phoneHint = document.getElementById("phonehint");
					// var hintText = document.getElementById("hint_text");
					// phoneHint.removeChild(hintText);
					while(phoneHint.hasChildNodes()) {
						phoneHint.removeChild(phoneHint.lastChild);
					}

					var phoneHint = document.getElementById("phonehint");
					var successImg = document.createElement('img');
					successImg.setAttribute('src','success.png');
					phoneHint.appendChild(successImg);
				}
				else
				{
					var phoneHint = document.getElementById("phonehint");
					// var hintText = document.getElementById("hint_text");
					// phoneHint.removeChild(hintText);
					while(phoneHint.hasChildNodes()) {
						phoneHint.removeChild(phoneHint.lastChild);
					}

					var phoneHint = document.getElementById("phonehint");
					var errorImg = document.createElement('img');
					successImg.setAttribute('src','error.png');
					phoneHint.appendChild(errorImg);
				}
				break;
			case email:
				if (inputString.match(/\S+@\S+\.\S+/))
				{
					var emailHint = document.getElementById("emailhint");
					// var hintText = document.getElementById("hint_text");
					// emailHint.removeChild(hintText);
					while(emailHint.hasChildNodes()) {
						emailHint.removeChild(emailHint.lastChild);
					}

					var emailHint = document.getElementById("emailhint");
					var successImg = document.createElement('img');
					successImg.setAttribute('src','success.png');
					emailHint.appendChild(successImg);
				}
				else
				{
					var emailHint = document.getElementById("emailhint");
					// var hintText = document.getElementById("hint_text");
					// emailHint.removeChild(hintText);
					while(emailHint.hasChildNodes()) {
						emailHint.removeChild(emailHint.lastChild);
					}

					var emailHint = document.getElementById("emailhint");
					var errorImg = document.createElement('img');
					errorImg.setAttribute('src','error.png');
					emailHint.appendChild(errorImg);
				}
				break;
			case sulley:
				if (inputString.match(/http:\/\/sulley\.cah\.ucf\.edu\/~[a-z]{2}[0-9]{6}/))
				{
					var sulleyHint = document.getElementById("sulleyhint");
					// var hintText = document.getElementById("hint_text");
					// sulleyHint.removeChild(hintText);
					while(sulleyHint.hasChildNodes()) {
						sulleyHint.removeChild(sulleyHint.lastChild);
					}

					var sulleyHint = document.getElementById("sulleyhint");
					var successImg = document.createElement('img');
					successImg.setAttribute('src','success.png');
					sulleyHint.appendChild(successImg);
				}
				else
				{
					var sulleyHint = document.getElementById("sulleyhint");
					// var hintText = document.getElementById("hint_text");
					// sulleyHint.removeChild(hintText);
					while(sulleyHint.hasChildNodes()) {
						sulleyHint.removeChild(sulleyHint.lastChild);
					}

					var sulleyHint = document.getElementById("sulleyhint");
					var errorImg = document.createElement('img');
					errorImg.setAttribute('src','error.png');
					sulleyHint.appendChild(errorImg);
				}
				break;
		}
		
		
	}
	function processSurvey() {
		
		// var firstName = document.survey.firstname.value;
		// var lastName = document.survey.lastname.value;
		// var phoneNum = document.survey.phone.value;
		// var emailAdd = document.survey.email.value;
		// var sulleyAdd = document.survey.sulley.value;

		// Process the survey portion of the form 

		for(var x=0; x<document.survey.elements['fear'].length; x++) {
			if (document.survey.elements['fear'][0].checked) {
				var fear = document.survey.elements['fear'][0].value;
			} else if (document.survey.elements['fear'][1].checked) {
				var fear = document.survey.elements['fear'][1].value;
			} else {
				var fear = 0;
			}
		}

		for(var x=0; x<document.survey.elements['tragedy'].length; x++) {
			if (document.survey.elements['tragedy'][0].checked) {
				var tragedy = document.survey.elements['tragedy'][0].value;
			} else if (document.survey.elements['tragedy'][1].checked) {
				var tragedy = document.survey.elements['tragedy'][1].value;
			} else {
				var tragedy = 0;
			}
		}	

		for(var x=0; x<document.survey.elements['strangers'].length; x++) {
			if (document.survey.elements['strangers'][0].checked) {
				var strangers = document.survey.elements['strangers'][0].value;
			} else if (document.survey.elements['strangers'][1].checked) {
				var strangers = document.survey.elements['strangers'][1].value;
			} else {
				var strangers = 0;
			}
		}
		
		for(var x=0; x<document.survey.elements['family'].length; x++) {
			if (document.survey.elements['family'][0].checked) {
				var family = document.survey.elements['family'][0].value;
			} else if (document.survey.elements['family'][1].checked) {
				var family = document.survey.elements['family'][1].value;
			} else {
				var family = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['weapon'].length; x++) {
			if (document.survey.elements['weapon'][0].checked) {
				var weapon = document.survey.elements['weapon'][0].value;
			} else if (document.survey.elements['weapon'][1].checked) {
				var weapon = document.survey.elements['weapon'][1].value;
			} else {
				var weapon = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['angry'].length; x++) {
			if (document.survey.elements['angry'][0].checked) {
				var angry = document.survey.elements['angry'][0].value;
			} else if (document.survey.elements['angry'][1].checked) {
				var angry = document.survey.elements['angry'][1].value;
			} else {
				var angry = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['comfy'].length; x++) {
			if (document.survey.elements['comfy'][0].checked) {
				var comfy = document.survey.elements['comfy'][0].value;
			} else if (document.survey.elements['comfy'][1].checked) {
				var comfy = document.survey.elements['comfy'][1].value;
			} else {
				var comfy = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['good'].length; x++) {
			if (document.survey.elements['good'][0].checked) {
				var good = document.survey.elements['good'][0].value;
			} else if (document.survey.elements['good'][1].checked) {
				var good = document.survey.elements['good'][1].value;
			} else {
				var good = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['life'].length; x++) {
			if (document.survey.elements['life'][0].checked) {
				var life = document.survey.elements['life'][0].value;
			} else if (document.survey.elements['life'][1].checked) {
				var life = document.survey.elements['life'][1].value;
			} else {
				var life = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['trust'].length; x++) {
			if (document.survey.elements['trust'][0].checked) {
				var trust = document.survey.elements['trust'][0].value;
			} else if (document.survey.elements['trust'][1].checked) {
				var trust = document.survey.elements['trust'][1].value;
			} else {
				var trust = 0;
			}
		}
		
		for(var x=0; x<document.survey.elements['demon'].length; x++) {
			if (document.survey.elements['demon'][0].checked) {
				var demon = document.survey.elements['demon'][0].value;
			} else if (document.survey.elements['demon'][1].checked) {
				var demon = document.survey.elements['demon'][1].value;
			} else {
				var demon = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['career'].length; x++) {
			if (document.survey.elements['career'][0].checked) {
				var career = document.survey.elements['career'][0].value;
			} else if (document.survey.elements['career'][1].checked) {
				var career = document.survey.elements['career'][1].value;
			} else {
				var career = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['love'].length; x++) {
			if (document.survey.elements['love'][0].checked) {
				var love = document.survey.elements['love'][0].value;
			} else if (document.survey.elements['love'][1].checked) {
				var love = document.survey.elements['love'][1].value;
			} else {
				var love = 0;
			}
		}	
		
		for(var x=0; x<document.survey.elements['choice'].length; x++) {
			if (document.survey.elements['choice'][0].checked) {
				var choice = document.survey.elements['choice'][0].value;
			} else if (document.survey.elements['choice'][1].checked) {
				var choice = document.survey.elements['choice'][1].value;
			} else {
				var choice = 0;
			}
		}		

		if ((fear == 0) || (tragedy == 0) || (strangers == 0) || (family == 0) || (weapon == 0) || (angry == 0)
		|| (comfy == 0) || (good == 0) || (life == 0) || (trust == 0) || (demon == 0) || (career == 0)|| (love == 0)
		|| (choice == 0)) {
			alert("You must enter in a response for ALL questions!");
			return;
		} else
			var score = parseInt(fear)+parseInt(tragedy)+parseInt(strangers)+parseInt(family)+parseInt(weapon)+parseInt(angry) +parseInt(comfy)+parseInt(good)+parseInt(life)+parseInt(trust)+parseInt(demon)+parseInt(career)+parseInt(love)+parseInt(choice);

		var myclassname="hidden";
		
		if ((score > 25) && (score <= 28))
		{
			//alert("You are Sam! <img src=img/sam.png>");
			window.location.href="louis.html";
		}
		else if ((score > 21) && (score <= 25))
		{
			//alert("You are Bobby! <img src=img/bobby.png>");
			window.location.href="daniel.html";
		}
		else if ((score > 17) && (score <= 21))
		{
			//alert("You are John! <img src=img/john.png>");
			window.location.href="armand.html";
		}
		else
		{
			//alert("You are Dean! <img src=img/dean.png>");
			window.location.href="lestat.html";
		}

		// end survey portion process
	
	}
//}