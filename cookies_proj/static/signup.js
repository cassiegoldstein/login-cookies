window.addEventListener('load', () => {
    //create array of special characters
    const special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const emailEl = document.querySelector(".emailClass");


    const loginBtn = document.querySelector("#login");


    //create error labels
    let errorLabelP = document.createElement("label");
    errorLabelP.classList.add("errorLabel");
    let errorLabelE = document.createElement("label");
    errorLabelE.classList.add("errorLabel");


    loginBtn.addEventListener('click', () => {
        //get value of password
        const password = document.querySelector("#typePasswordX-2");
        const passwordEl = document.querySelector(".passwordClass");
        const passwordValue = password.value;

        passwordEl.appendChild(errorLabelP);
        emailEl.appendChild(errorLabelE);

        //get value of email
        const email = document.querySelector("#typeEmailX-2")
        const emailValue = email.value;




        //check that email isn't empty
        if (emailValue.length === 0) {
            console.log('email is empty');
            errorLabelE.innerText = 'Email field cannnot be empty';
        } else {
            errorLabelE.innerText = '';
            console.log('email is not empty');
        }
        
        
        //check that password isn't empty
        if (passwordValue.length === 0) {
            console.log('password is empty');
            errorLabelP.innerText = 'Password field cannnot be empty';
        } else {
            errorLabelP.innerText = '';
            console.log('password is not empty');
        }
        
        //check that password contains special character
        if (special_characters.test(passwordValue) === true) {
            console.log("contains special character");
            errorLabelP.innerText = '';
        } else {
            console.log("does not contain special character");
            errorLabelP.innerText = 'Password must contain special character';
        }
        
        //check if user is good to log in
        if(errorLabelP.innerText === '' && errorLabelE.innerText === ''){
            console.log("good to go");
            axios.post('/sign-up/', {
                username: emailValue,
                password: passwordValue,
            }).then((response)=>{
                console.log(response)
            })

    };


    });

});
