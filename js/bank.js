let emailAdd = '';
let pass = '';

// register 
document.getElementById('register').addEventListener('click', function(){
    const regEmail = document.getElementById('reg-email');
    const regPass = document.getElementById('reg-pass');
    const userName = document.getElementById('user-name');
    if(regEmail.value == '' || regPass.value == '' || userName.value == '')
    {
        alert('Please filled the email & password field.');
    }
    else{
        alert('Register Successfully' + ' ' + userName.value);
        emailAdd = regEmail.value;
        pass = regPass.value;
    }
});

// login 
document.getElementById('login-submit').addEventListener('click', function(){
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user pass 
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    if(userEmail == emailAdd && userPass == pass && emailAdd != '' && pass != '')
    {
        
        // one way 
        location.href = "banking.html";
        alert('Login Successfully');
        // another way 
        // window.location.href = "https://ahsan-emon.github.io/Plant-Shop-Website/";
    }
    else{
        console.log('Not Valid');
        alert('Login Failed');
    }
});




// message for register user 
// const depositName = document.getElementById('deposit-name');
//     alert('Deposit Successfully' + ' ' + depositName.value);