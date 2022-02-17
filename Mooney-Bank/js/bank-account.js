// deposit 
document.getElementById('depo-btn').addEventListener('click', function(){
    // get deposit input value 
    const depoField = document.getElementById('depo-inp');
    const depoAmount = parseFloat(depoField.value);
    // get depo current amount 
    const depoCurrent = document.getElementById('depo-amount');
    const depoCurrentFloat = parseFloat(depoCurrent.innerText);
    // get balance amount
    const balAmount = document.getElementById('bal-amount');
    const balAmountFloat = parseFloat(balAmount.innerText);
    // upadte total balance and current deposit balance 
    // console.log(typeof(parseFloat(depoAmount)));
    if(!isNaN(depoAmount)){
        alert('Deposit Successfully');
        depoCurrent.innerText = depoCurrentFloat + depoAmount;
        balAmount.innerText = balAmountFloat + depoAmount;
       
    }
    else
    {
        alert('Wrong input, try again!');
    }
    // clear the deposit input field 
    depoField.value = '';
});
// withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get withdraw input value 
    const withdrawField = document.getElementById('withdraw-inp');
    const withdrawAmount = parseFloat(withdrawField.value);
    // get withdraw current amount 
    const withdrawCurrent = document.getElementById('withdraw-amount');
    const withdrawCurrentFloat = parseFloat(withdrawCurrent.innerText);
    // get balance amount
    const balAmount = document.getElementById('bal-amount');
    const balAmountFloat = parseFloat(balAmount.innerText);
    // upadte total balance and current deposit balance 
    // console.log(typeof(parseFloat(depoAmount)));
    if(!isNaN(withdrawAmount)){
        if(withdrawAmount <= balAmountFloat )
        {
            alert('Withdraw Successfully');
            withdrawCurrent.innerText = withdrawCurrentFloat + withdrawAmount;
            balAmount.innerText = balAmountFloat - withdrawAmount;
        }
        else{
            alert('Insufficient balance!');
        }
    }
    else
    {
        alert('Wrong input, try again!');
    }
    // clear the deposit input field 
    withdrawField.value = '';
});


// wesite buy 
document.getElementById('buy-btn').addEventListener('click', function(){
    const buyButton = document.getElementById('buy-btn');
    const websitePrice = document.getElementById('website-price');
    const websitePriceFloat = parseFloat(websitePrice.innerText);
    const myBalance = document.getElementById('bal-amount');
    // console.log(buyButton.innerText);
    if(myBalance.innerText >= websitePriceFloat && buyButton.innerText == 'BUY NOW')
    {
        buyButton.innerText = 'Owned';
        myBalance.innerText = parseFloat(myBalance.innerText) - websitePriceFloat;
        alert('Successfully owned this website');
    }
    else if(buyButton.innerText == 'OWNED')
    {
        window.location.href = "https://ahsan-emon.github.io/Plant-Shop-Website/";
    }
    else{
        alert('Insufficient balance!');
    }
});



// element create 
/* const button = document.createElement('button');
        button.innerText = "Click me";
        button.classList.add('click-me');
        const parent = document.getElementById('web-details').appendChild(button); */