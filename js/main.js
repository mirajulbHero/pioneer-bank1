

// Login Area

const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transitionArea = document.getElementById('transition-area');
    transitionArea.style.display = 'block';
    const emailInput = document.getElementById('input-email');
    emailInput.value = '';
});

// handleDeposit area
const depositBtn = document.getElementById('depositSubmit');
depositBtn.addEventListener('click', function(){
   const depositTaka = document.getElementById('depositAmount').value; 
    const depositNumber = parseFloat(depositTaka);


    const depositSpanAmount = document.getElementById('deposit-amount').innerText;
    const depositparseNumber = parseFloat(depositSpanAmount);
    const totalDepositAmount = depositNumber + depositparseNumber;
    document.getElementById('deposit-amount').innerText = totalDepositAmount ;
    



    const currentDepositSpan= document.getElementById('current-blance').innerText;
    const currentDepositParseNumber = parseFloat(currentDepositSpan);
    const currentTotalDepositAmount = depositNumber + currentDepositParseNumber;
    document.getElementById('current-blance').innerText = currentTotalDepositAmount;

    document.getElementById('depositAmount').value = '';

   
    
});

// handle withdaw Area
const withdawBtn = document.getElementById('withdaw-submit');
withdawBtn.addEventListener('click', function(){
    const withdawTaka = document.getElementById('withdawAmount').value;
    const withdawNumber = parseFloat(withdawTaka);


    const withdawSpanText = document.getElementById('withdaw-blance').innerText;
    const withdawParseNumber = parseFloat(withdawSpanText);
    const withdawAmount = withdawNumber + withdawParseNumber;
    document.getElementById('withdaw-blance').innerText = withdawAmount;



    const currentDepositSpan= document.getElementById('current-blance').innerText;
    const currentDepositParseNumber = parseFloat(currentDepositSpan);
    const currentTotalDepositAmount =  currentDepositParseNumber - withdawAmount ;
    document.getElementById('current-blance').innerText = currentTotalDepositAmount;




    document.getElementById('withdawAmount').value = "";
})
