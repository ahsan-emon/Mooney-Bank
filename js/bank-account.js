// output the input value 
function getInputValue(inputId){
    // get deposit input value 
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    // clear the deposit input field 
    inputField.value = '';
    return inputAmount;
}
// current balance 
function getCurrentBalance(currentId){
    const currentField = document.getElementById(currentId);
    const currentAmount = parseFloat(currentField.innerText);
    return currentAmount;
}
//output the update the value 
function updateTotalField(inputAmount,currentId, isAdd){
    // debugger;
    const currentField = document.getElementById(currentId);
    const currentAmount = getCurrentBalance(currentId);
    const balCurrent = document.getElementById('bal-amount');
    const balCurrentAmount = getCurrentBalance('bal-amount');

    if(isAdd == true)
    {
        alert('Deposit Successfully');
        currentField.innerText = currentAmount + inputAmount;
        balCurrent.innerText = balCurrentAmount + inputAmount;
    }
    else
    {
        if(inputAmount <= balCurrentAmount )
        {
            alert('Withdraw Successfully');
            currentField.innerText = currentAmount + inputAmount;
            document.getElementById('bal-amount').innerText = balCurrentAmount - inputAmount;
        }
        else{
            alert('Insufficient balance!');
        }
    
    }
}
document.getElementById('depo-btn').addEventListener('click', function(){
    // get deposit input value 
    const depoAmount = getInputValue('depo-inp');
    if(depoAmount > 0)
    {
        // update after deposit 
        updateTotalField(depoAmount, 'depo-amount', true);
    }
    else
    {
        alert('Wrong input taken!!');
    }
});
// withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //get withdraw input value
    const withdrawAmount = getInputValue('withdraw-inp');
    if(withdrawAmount > 0)
    {
        // update after withdraw 
        updateTotalField(withdrawAmount, 'withdraw-amount', false);
    }
    else
    {
        alert('Wrong input taken!!');
    }
});


// wesite buy 
document.getElementById('buy-btn').addEventListener('click', function(){
    const buyButton = document.getElementById('buy-btn');
    const websitePriceFloat = getCurrentBalance('website-price');
    const myBalanceText = document.getElementById('bal-amount');
    const myBalance = getCurrentBalance('bal-amount');
    // console.log(buyButton.innerText);
    if(myBalance >= websitePriceFloat && buyButton.innerText == 'BUY NOW')
    {
        buyButton.innerText = 'OWNED';
        myBalanceText.innerText = myBalance - websitePriceFloat;
        alert('Successfully owned this website');
    }
    else if(buyButton.innerText == 'OWNED')
    {
        /* window.location.href = "https://ahsan-emon.github.io/Plant-Shop-Website/";
        target = "_blank" */
        // this way target attribute worked 
        window.open("https://ahsan-emon.github.io/Plant-Shop-Website/", '_blank');
    }
    else{
        alert('Insufficient balance!');
    }
});
// wesite buy1 
document.getElementById('buy-btn1').addEventListener('click', function(){
    const buyButton = document.getElementById('buy-btn1');
    const websitePriceFloat = getCurrentBalance('website-price1');
    const myBalanceText = document.getElementById('bal-amount');
    const myBalance = getCurrentBalance('bal-amount');
    // console.log(buyButton.innerText);
    if(myBalance >= websitePriceFloat && buyButton.innerText == 'BUY NOW')
    {
        buyButton.innerText = 'OWNED';
        myBalanceText.innerText = myBalance - websitePriceFloat;
        alert('Successfully owned this website');
    }
    else if(buyButton.innerText == 'OWNED')
    {
        /* window.location.href = "https://ahsan-emon.github.io/Cycle-website/";
        target = "_blank" */
        // this way target attribute worked 
        window.open("https://ahsan-emon.github.io/Cycle-website/", '_blank');
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